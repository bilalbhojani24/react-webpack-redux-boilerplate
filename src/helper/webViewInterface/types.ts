import { ReactElement } from 'react';

export interface validateFunctionType {
  cb: any,
  logInCaseOfInvalid: boolean,
}

export interface Props {
  WrappedComponent : ReactElement
}

export interface State {
  visible: boolean,
  errors: Array<string>,
  data: any,
  okText : string

}
