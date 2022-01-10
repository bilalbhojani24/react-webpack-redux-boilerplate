import axios from 'axios';
import MessageFormat from 'messageformat';
import { getLoggerForModule } from 'helper/utils/utilsAppLogger';
import { getAxiosApiConfig } from './apiConfig';
import { isValidObject } from './apiHelper';

const messageFormatter = new MessageFormat('en');
const localLogger = getLoggerForModule('ApiService');

class ApiService {
  config: any;

  apiConfig: any;

  constructor(config: any, apiKeyParam?: any) {
    const apiKey = apiKeyParam || config.apiKey;

    this.config = config || {};

    if (apiKey) {
      this.apiConfig = getAxiosApiConfig(apiKey);
      // Header Config
      if (isValidObject(this.config.headers)) this.apiConfig.headers = this.config.headers;

      // JSON Request Body
      if (this.config.data) this.apiConfig.data = this.config.data;

      // URL Path Variables
      if (isValidObject(this.config.pathVariables)) {
        const rawUrl = this.apiConfig.url;
        const mfUrl = messageFormatter.compile(rawUrl);
        this.apiConfig.url = mfUrl(this.config.pathVariables);
      }

      // URL Params
      if (isValidObject(this.config.urlParams)) {
        const url = new URL(this.apiConfig.url, window.location.origin);
        const params = this.config.urlParams;
        if (params) {
          Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
          this.apiConfig.url = url;
        }
      }

      if (!this.apiConfig) {
        localLogger.error(`No Api-config present for apiKey - ${apiKey}`);
      }
    }
  }

  getApiConfig = () => this.apiConfig;

  beforeSendCallBack = () => {
    if (typeof this.config.beforeSendCallBack === 'function') this.config.beforeSendCallBack();
  };

  completeCallBack = (response : any) => {
    if (typeof this.config.completeCallBack === 'function') this.config.completeCallBack(response);
  };

  call = () => {
    this.beforeSendCallBack();

    return new Promise((resolve, reject) => {
      axios(this.apiConfig)
        .then((response) => {
          this.completeCallBack(response);
          resolve(response);
        })
        .catch((error) => {
          this.completeCallBack(error);
          reject(error);
        });
    });
  };
}

export default ApiService;
