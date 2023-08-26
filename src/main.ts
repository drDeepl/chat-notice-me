import './assets/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import { NButton, NSpace } from 'naive-ui';
import naive from 'naive-ui';

const app = createApp(App);
app.use(naive);
app.use(router);

app.mount('#app');
