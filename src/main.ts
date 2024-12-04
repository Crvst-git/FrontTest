import { createApp } from 'vue'
import App from './App.vue'
import 'carbon-components/css/carbon-components.css';
import CarbonComponentsVue from '@carbon/vue';

const app = createApp(App);
app.use(CarbonComponentsVue);
app.mount('#app');

