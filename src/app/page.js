import { adminAuth } from "@/firebase/firebaseAdmin"
import { cookies } from "next/headers"
import Link from "next/link"
import { SignOutButton } from "./SignOutButton"

export default async function HomePage() {
  const idToken = cookies().get("idToken")

  // Verify and decode the token
  const idTokenDecoded =
    idToken && (await adminAuth.verifyIdToken(idToken.value))

  return (
    <>
      <div>Home page</div>
      {idTokenDecoded ? (
        <SignOutButton />
      ) : (
        <>
          <Link href="/signup">Sign up</Link>
          <span> | </span>
          <Link href="/signin">Sign in</Link>
        </>
      )}
    </>
  )
}
