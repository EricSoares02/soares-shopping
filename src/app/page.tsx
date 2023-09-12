'use client'
import Load from '@/components/loading/loading'
import Image from 'next/image'

{/* <Image className='search'
src="/loading.png"
alt="loading"
width={200}
height={200}
priority
/>  */}

export default function Home() {
  return (
    <main>
     <Load></Load>
    </main>
  )
}
