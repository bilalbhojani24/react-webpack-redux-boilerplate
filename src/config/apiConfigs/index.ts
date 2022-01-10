import ApiService from './apiService';
import { getConfig } from './apiConfig';

const createAPI = (configPath : string, data?: any, pathVariables?:any, urlParams?: any) => {
  const config = {
    ...getConfig(configPath),
    data,
    pathVariables,
    urlParams,
  };
  console.log(config);
  const apiInstance = new ApiService(config);
  return apiInstance.call();
};

export default createAPI;
