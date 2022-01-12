import { getFromLocalStorage } from 'helper/utils/utilsLocalStorage';
import { currentApiUrlPrefix, currentEnvironmentConfig } from './environmentConfig';
import ApiConstants from './apiConstants';

// Helper functions
const getJWTHeader = (config: { headers?: any; }, useRefreshToken = false) => {
  const enhancedConfig = config;
  const myAcc = getFromLocalStorage('OATS') || '';
  enhancedConfig.headers = {
    ...config.headers,
    Authorization: `Bearer ${useRefreshToken ? myAcc.refresh_token : myAcc.access_token}`,
  };
  return enhancedConfig;
};

// Pure Config to be used by AXIOS
const getAxiosApiConfig = (apiKey: string) => {
  if (apiKey && apiKey.indexOf('.')) {
    const apiKeyParams = apiKey.split('.');
    if (apiKey && ApiConstants[apiKeyParams[0]] && ApiConstants[apiKeyParams[0]][apiKeyParams[1]]) {
      const currentApi = ApiConstants[apiKeyParams[0]][apiKeyParams[1]];
      const apiConfig = { ...currentApi.apiConfig };
      if (currentApi.attachPrefix) {
        apiConfig.url = currentApiUrlPrefix + apiConfig.url;
      }
      return {
        ...apiConfig,
      };
    }
  }
  return null;
};

// Get Config Function for creating custom config object
const getConfig = (apiKey: string) => {
  let config = {} as any;
  if (apiKey && apiKey.indexOf('.')) {
    const apiKeyParams = apiKey.split('.');
    if (apiKeyParams.length && ApiConstants[apiKeyParams[0]] && ApiConstants[apiKeyParams[0]][apiKeyParams[1]]) {
      const currentApi = ApiConstants[apiKeyParams[0]][apiKeyParams[1]];
      config = { ...currentApi.config };
      config = config || {};
      if (currentEnvironmentConfig.enableAuthorization && !currentApi.skipAuth) {
        config = getJWTHeader(config, currentApi.useRefreshToken);
      }
      config.apiKey = apiKey;
    }
  }
  return config;
};

export { getAxiosApiConfig, getConfig };
