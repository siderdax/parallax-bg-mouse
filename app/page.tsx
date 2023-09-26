'use client'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.addEventListener('mousemove', (e: MouseEvent) => {
      document.querySelectorAll<HTMLElement>('.galaxy').forEach((box) => {
        const dataValue = parseInt(box.getAttribute('data-value') ?? '0')
        const transform = 'translateX(' + (e.clientX * dataValue) / 250 + 'px) '
        box.style.transform = transform
        box.style.transitionDuration = '0'
      })
    })

    return () => {}
  }, [])

  return (
    <>
      <section
        className='to-purple-800 to-100%" absolute h-full
        w-full bg-gradient-to-b from-black from-50% via-indigo-900 via-90%'
      />
      <section
        className="galaxy bg-galaxy1 absolute h-full w-full bg-auto"
        data-value="-5"
      />
      <section
        className="galaxy bg-galaxy2 absolute h-full w-full bg-auto"
        data-value="-1"
      />
      <section
        className="galaxy bg-galaxy3 absolute h-full w-full bg-auto"
        data-value="-3"
      />
      <section
        className="galaxy bg-galaxy4 absolute h-full w-full bg-auto"
        data-value="-9"
      />
      <main className="absolute flex h-full w-full items-center justify-center overflow-y-auto">
        <div className="flex h-[4100px] items-center font-serif text-lg font-semibold text-white">
          Galaxy
        </div>
      </main>
    </>
  )
}
