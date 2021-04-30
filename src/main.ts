import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzG1m1iOaWr-7sXIplQ5tMRmC3-3zPZhk",
  authDomain: "photo-sharing-app-tut-e9bd8.firebaseapp.com",
  projectId: "photo-sharing-app-tut-e9bd8",
  storageBucket: "photo-sharing-app-tut-e9bd8.appspot.com",
  messagingSenderId: "246291267334",
  appId: "1:246291267334:web:5b41a112fa17967f73a887"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});