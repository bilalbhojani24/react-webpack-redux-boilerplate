import { ReactElement } from 'react';

export interface ValidateFunctionType {
  cb: any,
  logInCaseOfInvalid: boolean,
}

export interface Props {
  WrappedComponent : ReactElement
}

export interface State {
  isVisible: boolean,
  errors: Array<string>,
  data: any,
  okText: string
}
