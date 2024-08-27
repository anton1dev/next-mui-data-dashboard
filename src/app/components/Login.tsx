'use client'
import Button from '@mui/material/Button'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const Login = () => {
    const { data: session, status } = useSession()

    if (status === "authenticated" && !!session) {
        return <>
            <Button variant='contained' color='info' onClick={() => signOut()}>Log out!</Button>
        </>
    }

    return <Button variant='contained' color='success' onClick={() => signIn()}>Sign In</Button>
}

export default Login