// Important references regarding token verification
// https://github.com/panva/jose/discussions/626
// https://firebase.google.com/docs/auth/admin/verify-id-tokens#verify_id_tokens_using_a_third-party_jwt_library
// https://stackoverflow.com/questions/77812351/how-to-verify-a-firebase-id-token-using-jose-in-node
// https://stackoverflow.com/questions/53055654/firebase-admin-auth-verify-id-token-is-very-slow/76979358#76979358

import { cert, getApp, getApps, initializeApp } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth"
import { getFirestore } from "firebase-admin/firestore"

const adminApp =
  getApps().length > 0
    ? getApp()
    : process.env.NODE_ENV == "development"
    ? initializeApp({ projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID })
    : initializeApp({
        credential: cert({
          projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: JSON.parse(process.env.FIREBASE_PRIVATE_KEY),
        }),
      })

export const adminAuth = getAuth(adminApp)
export const adminDB = getFirestore(adminApp)
