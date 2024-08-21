"use client"

import { auth } from "@/firebase/firebase"
import { signOut } from "firebase/auth"
import { useRouter } from "next/navigation"

export function SignOutButton() {
  const router = useRouter()

  const handleSignOut = () => {
    signOut(auth)

    // Delete the idToken cookie
    document.cookie = 'idToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'

    // Refresh the page
    router.refresh()
  }
  return <button onClick={ handleSignOut }>Sign out</button>
}