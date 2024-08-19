"use client"

import { auth } from "@/firebase/firebase"
import Link from "next/link"

export function Home() {
  return (
    auth.currentUser
      ? <button>Sign out</button>
      : <>
        <Link href="/signup">Sign up</Link>
        <span> | </span>
        <Link href="/signin">Sign in</Link>
      </>
  )
}