"use client"

import { auth } from "@/firebase/firebase"
import { onAuthStateChanged } from "firebase/auth"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Home() {
  const [authUser, setAuthUser] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log("usr", JSON.stringify(user))
        setAuthUser(user)
      } else {
        // User is signed out
      }
    })

    return unsubscribe
  }, [])


  return (
    authUser
      ? <button>Sign out</button>
      : <>
        <Link href="/signup">Sign up</Link>
        <span> | </span>
        <Link href="/signin">Sign in</Link>
      </>
  )
}