"use client"

import { auth } from "@/firebase/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

export function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleFormSubmit = (event) => {
    event.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userCredential", JSON.stringify(userCredential))
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

      <button type="submit">Sign up</button>
    </form>
  )
}
