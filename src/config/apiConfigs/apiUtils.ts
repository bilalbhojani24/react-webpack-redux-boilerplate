import { getFromBetweenChars, cleanObject } from './apiHelper';

const createPathVariableConfig = (url : string) => {
  const pathVariablesArray = getFromBetweenChars(url, '{', '}');
  if (pathVariablesArray.length === 0) return undefined;

  const result : any = {};
  pathVariablesArray.forEach((el : string) => {
    result[el] = '';
  });

  return result;
};

export const get = 'GET';
export const post = 'POST';
export const put = 'PUT';

export const createConfig = (url : string, method?: string, attachPrefix = true, skipAuth = false, urlParams?: string) => cleanObject({
  apiConfig: { url, method },
  config: { urlParams, pathVariables: createPathVariableConfig(url) },
  attachPrefix,
  skipAuth,
});
