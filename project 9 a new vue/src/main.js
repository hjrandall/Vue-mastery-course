import { createApp } from 'vue';

import App from './APP.vue'
import FriendContact from './components/FriendContact.vue'

const app = createApp(App);
app.component('frined-contact',FriendContact);
app.mount('#app')
