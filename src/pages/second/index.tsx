import React from 'react';
import './style.scss';
import WebviewInterface from 'helper/webViewInterface';

interface Second {
  interactWithNative : any
}

const Second: React.FC<Second> = () => (<div className="first__view">I am the second page!!</div>);

export default WebviewInterface(Second);
