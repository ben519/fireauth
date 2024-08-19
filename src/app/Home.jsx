"use client"

import { auth } from "@/firebase/firebase"
import { onAuthStateChanged } from "firebase/auth"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Home() {
  const [authUser, setAuthUser] = useState(undefined)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // user will be an object or null
      setAuthUser(user)
    })

    return unsubscribe
  }, [])

  return (
    authUser === undefined
      ? <div>Loading...</div>
      : (
        authUser
          ? <button>Sign out</button>
          : <>
            <Link href="/signup">Sign up</Link>
            <span> | </span>
            <Link href="/signin">Sign in</Link>
          </>
      )
  )
}