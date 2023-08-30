import './assets/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import { NButton, NSpace } from 'naive-ui';
import naive from 'naive-ui';
import { createLogger, useLogger } from 'vue-logger-plugin';
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

const logger = createLogger(options);

const app = createApp(App);
app.use(logger);
app.use(naive);
app.use(router);

app.mount('#app');
