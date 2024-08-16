// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { connectAuthEmulator, getAuth } from "firebase/auth"
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore"
import { connectFunctionsEmulator, getFunctions } from "firebase/functions"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Instantiate services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const functions = getFunctions(app)

// Emulator
if (process.env.NODE_ENV == "development") {
  connectAuthEmulator(auth, "http://127.0.0.1:9099")
  connectFunctionsEmulator(functions, "127.0.0.1", 5001)
  connectFirestoreEmulator(db, "127.0.0.1", 8080)
}
