import { validateFunctionType } from './types';

export const validateFunction = (payload: validateFunctionType) => {
  if (typeof payload.cb === 'function') {
    return payload.cb;
  }
  return () => {
    if (payload.logInCaseOfInvalid) {
      console.log('Not a valid function');
    }
  };
};

export const checkIfObject = (value : any) => value.constructor === {}.constructor;

export const isWebviewMode = () => new URLSearchParams(window.location.search).get('platform') === 'native';

export const isIOSDevice = () => /iPad|iPhone|iPod/.test(navigator.userAgent);

export const isAndroidDevice = () => /android/i.test(navigator.userAgent);
