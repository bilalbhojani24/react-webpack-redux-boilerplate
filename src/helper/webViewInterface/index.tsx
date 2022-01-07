/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from 'react';
import Modal from './modal';
import {
  validateFunction, isWebviewMode, isIOSDevice, checkIfObject,
} from './helperFunctions';
import { Props, State } from './types';
import { storeURLs } from './data';
import './style.css';

declare global {
    interface Window {
        WebView:any;
    }
}

const WebviewInterface = (WrappedComponent: React.FunctionComponent<any>): any => {
  class WithWebviewInterface extends Component<Props, State> {
    errorMessages: {
      ACTION_KEY_INPUT_ABSENT: string,
      PLATFORM_NOT_NATIVE: string,
      WEBVIEWINTERFACE_FUNCTION_ABSENT: string,
    };

    constructor(props : Props) {
      super(props);
      this.errorMessages = {
        ACTION_KEY_INPUT_ABSENT: 'No Action Key present. Exiting the function call!',
        PLATFORM_NOT_NATIVE: 'Applicable only for Native Webview Mode. Current platform mode not supported!',
        WEBVIEWINTERFACE_FUNCTION_ABSENT: 'To use this feature, download the latest version.',
      };
      this.interactWithNative = this.interactWithNative.bind(this);
      this.state = {
        visible: false,
        errors: [],
        data: {},
        okText: 'OK',
      };
    }

    handleOk = () => {
      const { okText } = this.state;
      if (isWebviewMode() && okText.includes('Update')) window.open(isIOSDevice() ? storeURLs.ios : storeURLs.android, '_blank');
      this.handleCancel();
    };

    handleCancel = () => this.setState((prevState) => ({ visible: !prevState.visible, errors: [] }));

    // eslint-disable-next-line no-async-promise-executor
    interactWithNative = (actionKey: any, inputData = '') => new Promise(async (resolve, reject) => {
      console.log('%c Calling interactWithNative function ', 'background: #222; color: #007bff');
      let { errors, data } = this.state;
      if (!isWebviewMode()) errors.push(this.errorMessages.PLATFORM_NOT_NATIVE);
      if (!actionKey) errors.push(this.errorMessages.ACTION_KEY_INPUT_ABSENT);
      if (!window.WebView || (window.WebView && !window.WebView.interactWithNativeFromWebView)) errors.push(this.errorMessages.WEBVIEWINTERFACE_FUNCTION_ABSENT);
      if (!(Array.isArray(errors) && errors.length)) {
        const response = await window.WebView.interactWithNativeFromWebView(actionKey, inputData && checkIfObject(inputData) ? JSON.stringify(inputData) : inputData);
        try {
          ({ data, errors } = JSON.parse(response));
        } catch {
          console.log('%c InteractWithNative invalid json response', 'background: #222; color: red');
          ({ data, errors } = JSON.parse(JSON.stringify({ data: { success: 'true' } })));
        }
      }
      if (!(Array.isArray(errors) && errors.length)) {
        console.log('%c InteractWithNative function Success', 'background: #222; color: yellow');
        resolve(data);
      } else {
        this.handleErrors(errors, () => {
          console.log('%c InteractWithNative function Failed', 'background: #222; color: #dc3545');
          reject(errors);
        });
      }
    });

    handleErrors = (errors : Array<string>, callback : any) => {
      this.setState({ errors, visible: !!errors.length, okText: errors.includes(this.errorMessages.WEBVIEWINTERFACE_FUNCTION_ABSENT) ? 'Update Now' : 'OK' }, () => {
        console.error(`Errors encountered while invoking the interactWithNative:::${JSON.stringify(errors)}`);
        validateFunction(callback)();
      });
    };

    renderModal = () => {
      const { visible, errors, okText } = this.state;
      return (
        visible && (
          <Modal visible={visible}>
            <div className="webkit-view-message">
              <h3>Update Symbo App</h3>
              <ul>{!!errors.length && errors.map((val) => <li key={`error-${Math.random()}`}>{val}</li>)}</ul>
              <div className="footer">
                <button className="okCancelBtn" type="button" onClick={this.handleCancel}>
                  Cancel
                </button>
                <button className="okCancelBtn" type="button" onClick={this.handleOk}>
                  {okText}
                </button>
              </div>
            </div>
          </Modal>
        )
      );
    };

    render() {
      return (
        <div>
          <WrappedComponent {...this.props} interactWithNative={this.interactWithNative} />
          {this.renderModal()}
        </div>
      );
    }
  }
  return WithWebviewInterface;
};

export default WebviewInterface;
