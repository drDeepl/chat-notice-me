import { createLogger, VueLogger } from 'vue-logger-plugin';
import type { LoggerOptions } from 'vue-logger-plugin';
const options: LoggerOptions = {
  enabled: true,
  level: 'debug',
  callerInfo: true,
  prefixFormat: ({ level, caller }) =>
    caller
      ? `[${level.toUpperCase()}] [${caller.fileName?.toUpperCase()}] [${caller?.fileName}:${caller?.functionName}:${caller?.lineNumber}]`
      : `[${level.toUpperCase()}]`
};

export const logger = createLogger(options);

// export class Logger extends VueLogger {
//   constructor(prefix: string) {
//     options['prefixFormat'] = ({ level, caller }) =>
//       caller
//         ? `[${level.toUpperCase()}] [${caller.fileName?.toUpperCase()}] [${caller?.fileName}:${caller?.functionName}:${caller?.lineNumber}]`
//         : `[${level.toUpperCase()}]`;
//     super(options);
//   }
// }
