import logo from 'loglevel';
import prefix from 'loglevel-plugin-prefix';
import dayjs from 'dayjs';
import { currentEnvironmentConfig, logLevels } from 'config/apiConfigs/environmentCOnfig';
const defaultLogLevel : any = currentEnvironmentConfig.logLevel || logLevels.INFO;
const log = logo as any;

prefix.apply(log, {
  template: '[%t] %l (%n):',
  timestampFormatter(date) {
    return dayjs(date).format('DD/MM/YYYY HH:mm:ss.SSS');
  },
  levelFormatter(level) {
    return level.charAt(0).toUpperCase() + level.substr(1);
  },
  nameFormatter(name) {
    return name || 'global';
  },
});

log.setLevel(log.levels[defaultLogLevel]);

const getLoggerForModule = (moduleName : string) => {
  log.getLogger('logModule').info('module logger init-', moduleName);
  return log.getLogger(moduleName);
};

export { getLoggerForModule, log };
