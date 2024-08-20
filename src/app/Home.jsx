"use client"

import { auth } from "@/firebase/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Home() {
  const [authUser, setAuthUser] = useState(undefined)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user)
    })
    return unsubscribe
  }, [])

  const handleSignOut = () => {
    signOut(auth)
  }

  return (
    authUser === undefined
      ? <div>Loading...</div>
      : (
        authUser
          ? <button onClick={ handleSignOut }>Sign out</button>
          : <>
            <Link href="/signup">Sign up</Link>
            <span> | </span>
            <Link href="/signin">Sign in</Link>
          </>
      )
  )
}