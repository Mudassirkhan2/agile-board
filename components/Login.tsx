"use client"

import Image from 'next/image'
import React from 'react'
import logoGoogle from '../public/assets/logo-google.svg'
import { signIn, signOut, useSession } from 'next-auth/react'

const Login = () => {
    const handleSignIn = async () => {
        signIn('google', { callbackUrl: 'http://localhost:3000/blogs/createpost' })
    };
    return (
        <div className='flex justify-center items-center bg-[#2980b9] w-screen h-screen'>
            <div className='flex flex-col  gap-4 md:gap-8 justify-center items-center  '>
                <h1 className='text-white  text-2xl md:text-3xl tracking-S'>LOGIN</h1>
                <button className='flex flex-row justify-center items-center w-[200px] h-[48px] text-gray-800 bg-white p-2 rounded-[24px] text-hM text-purple' onClick={handleSignIn}>
                    Sign in with <Image src={logoGoogle} alt='logo google' className='w-7 ml-2' />
                </button>
            </div>
        </div>
    )
}

export default Login
