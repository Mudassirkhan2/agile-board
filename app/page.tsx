"use client";
import { useRouter } from 'next/navigation';
import KanbanBoard from "@/components/KanbanBoard";
import Navbar from "@/components/Navbar";
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()
  const router = useRouter();
  // If there's no session, redirect to login
  if (status === 'unauthenticated') {
    router.push('/login');
  }
  return (
    <main>
      <Navbar />
      <KanbanBoard />
    </main>
  )
}