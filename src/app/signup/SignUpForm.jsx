"use client"

import { auth } from "@/firebase/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleFormSubmit = (event) => {
    event.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user

        return user.getIdToken().then((idToken) => {
          let cookie = `idToken=${ idToken }; SameSite=Lax;`
          if (window.location.hostname !== "localhost") cookie += " secure;"
          document.cookie = cookie

          router.push("/")
          router.refresh()
        })
      })
      .catch((error) => {
        console.log("Error:", error)
      })
  }

  return (
    <form onSubmit={ handleFormSubmit }>
      <label>Email:</label>
      <input
        type="text"
        value={ email }
        onChange={ (event) => setEmail(event.target.value) }
      />

      <label>Password:</label>
      <input
        type="password"
        value={ password }
        onChange={ (event) => setPassword(event.target.value) }
      />

      <button type="submit">Sign up</button>
    </form>
  )
}
