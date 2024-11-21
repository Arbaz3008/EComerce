import { initializeApp } from "firebase/app";
import { getAuth , getReactNativePersistence} from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyCyKjiUINUxsLYv_GvjdXP6bx9UN9iyFSY",
    authDomain: "ecomerce-d6296.firebaseapp.com",
    projectId: "ecomerce-d6296",
    storageBucket: "ecomerce-d6296.appspot.com",
    messagingSenderId: "25189494270",
    appId: "1:25189494270:web:55ad6f406ad77c7203e4af",
    measurementId: "G-0V01YYBD8C"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };