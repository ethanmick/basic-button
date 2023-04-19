'use client'

import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={clsx(
        'mx-auto container flex justify-center mt-20',
        inter.className
      )}
    >
      <Button onClick={() => console.log('Boom!')}>Button</Button>
    </main>
  )
}
