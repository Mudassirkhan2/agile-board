
"use client"
import React from 'react'
import { signOut } from 'next-auth/react'

const Navbar = () => {
    return (
        <nav className=' bg-gray-700 p-4'>
            <div className='flex justify-between items-center max-w-[90%] mx-auto'>
                <h1 className='font-bold text-xl md:text-3xl font-mono'>KanbanBoard</h1>
                <div className='flex justify-between items-center space-x-4'>
                    <button className="h-12 w-[184px] flex justify-center items-center rounded-[24px] font-bold bg-purple-600 hover:bg-purple-300 text-white" >+ Create New Board</button>
                    <button onClick={
                        () => signOut()
                    } className="h-12 w-[154px] flex justify-center items-center rounded-[24px] font-bold bg-purple-600 hover:bg-purple-300 text-white" >Sign out</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
