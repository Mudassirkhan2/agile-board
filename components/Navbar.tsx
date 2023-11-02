
"use client"
import React, { useEffect, useState } from 'react'
import { signOut } from 'next-auth/react'
import darkIcon from '../public/assets/icon-dark-theme.svg';
import lightIcon from '../public/assets/icon-light-theme.svg';
import Image from 'next/image';
const Navbar = () => {
    const [theme, setTheme] = useState('light')
    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('light')
        } else {
            setTheme('light')
        }
        const localTheme = window.localStorage.getItem('theme')
        localTheme && setTheme(localTheme)
    }, [])
    useEffect(() => {
        console.log(darkMode)
        if (darkMode) {
            setTheme('dark')
            window.localStorage.setItem('theme', 'dark')
        } else {
            setTheme('light')
            window.localStorage.setItem('theme', 'light')
        }
    }, [darkMode])
    useEffect(() => {
        console.log(theme)
        if (theme === 'light') {
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.add('light')
        }
        if (theme === 'dark') {
            document.documentElement.classList.remove('light')
            document.documentElement.classList.add('dark')
        }
    }, [theme])

    return (
        <nav className='bg-[#f3f6ff] dark:bg-gray-700 shadow-2xl  p-4'>
            <div className='flex justify-between items-center max-w-[90%] mx-auto'>
                <h1 className='font-bold text-xl md:text-3xl font-mono text-gray-800 dark:text-white'>Agile Board</h1>
                <div className='flex justify-between items-center space-x-4'>
                    <div className='w-[84%] h-[48px] flex items-center justify-center bg-lightBg dark:bg-darkBg rounded-md self-center'>
                        <Image src={lightIcon} alt="light icon" />
                        <label className="inline-flex relative items-center mx-6 cursor-pointer">
                            <input type="checkbox" value={0} className="sr-only peer" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                            <div className="w-10 h-5 bg-purple-600 rounded-full peer peer-focus:ring-purple-300 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[3px] after:left-[6px] after:bg-white after:rounded-full after:h-[14px] after:w-[14px] after:transition-all"></div>
                        </label>
                        <Image src={darkIcon} alt="Dark icon" />
                    </div>
                    {/* <button className="h-12 w-[184px] flex justify-center items-center rounded-[24px] font-bold bg-purple-600 hover:bg-purple-300 text-white" >+ Create New Board</button> */}
                    <button onClick={
                        () => signOut()
                    } className="h-12 w-[154px] flex justify-center items-center rounded-[24px] font-bold bg-purple-600 hover:bg-purple-300 text-white" >Sign out</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
