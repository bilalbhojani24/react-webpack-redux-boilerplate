const environments: any = {
  PROD: 'PROD',
  DEV: 'DEV',
  SIT: 'SIT',
  UAT: 'UAT',
  UAT1: 'UAT1',
  PREPROD: 'PREPROD',
  DEFAULT: 'DEV',
};

export const currentEnvironment = process.env.REACT_APP_RUN_MODE && Object.keys(environments).includes(process.env.REACT_APP_RUN_MODE) ? environments[process.env.REACT_APP_RUN_MODE] : environments.DEFAULT;

export const apiUrlPrefixes = {
  [environments.PROD]: 'https://jsonplaceholder.typicode.com/',
  [environments.DEV]: 'https://jsonplaceholder.typicode.com/',
  [environments.SIT]: 'https://jsonplaceholder.typicode.com/',
  [environments.UAT]: 'https://jsonplaceholder.typicode.com/',
  [environments.UAT1]: 'https://jsonplaceholder.typicode.com/',
};

export const logLevels = {
  TRACE: 'TRACE',
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  OFF: 'SILENT',
};

const prodEnvironmentConfig = {
  enableAuthorization: true,
  enableMock: false,
  logLevel: logLevels.WARN,
};

const nonProdEnvironmentConfig = {
  enableAuthorization: true,
  enableMock: false,
  logLevel: logLevels.DEBUG,
};

const environmentConfigs = {
  [environments.PROD]: prodEnvironmentConfig,
  [environments.DEV]: nonProdEnvironmentConfig,
  [environments.SIT]: nonProdEnvironmentConfig,
  [environments.UAT]: nonProdEnvironmentConfig,
  [environments.PREPROD]: nonProdEnvironmentConfig,
};

export const currentApiUrlPrefix = apiUrlPrefixes[currentEnvironment];
export const currentEnvironmentConfig = environmentConfigs[currentEnvironment];
