"use client"

import { auth } from "@/firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function SignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleFormSubmit = (event) => {
    event.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log("userCredential", JSON.stringify(userCredential))
        router.push("/")
      })
      .catch((error) => {
        console.log("Error:", error)
      })
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit">Sign in</button>
    </form>
  )
}
