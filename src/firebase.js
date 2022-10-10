import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDQs6yWoe_QESI3cW8x5IlAXw18oVcMdOI",
  authDomain: "kameleon-363208.firebaseapp.com",
  projectId: "kameleon-363208",
  storageBucket: "kameleon-363208.appspot.com",
  messagingSenderId: "932209103433",
  appId: "1:932209103433:web:b9c6c79ca35c666218e598",
  measurementId: "G-23MTZLMSVB"
})

export const auth = app.auth()
export default app
