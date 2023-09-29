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

    document.querySelector('.main')?.addEventListener('scroll', (e: Event) => {
      const el = e.target as Element
      document.querySelectorAll<HTMLElement>('.gal-scroll').forEach((box) => {
        const dataValue = parseInt(box.getAttribute('data-value') ?? '0')
        const transform =
          'translateY(' + (el.scrollTop * dataValue) / 250 + 'px) '
        box.style.transform = transform
        box.style.transitionDuration = '0'
      })
    })

    return () => {}
  }, [])

  return (
    <>
      <section
        className='to-100%" absolute h-full w-full
        bg-gradient-to-b from-black from-50% via-indigo-900 via-90% to-purple-800'
      />
      <section
        className="gal-scroll absolute flex h-full w-full"
        data-value="-5"
      >
        <div className="galaxy w-full bg-galaxy1 bg-auto" data-value="-5" />
      </section>
      <section
        className="gal-scroll absolute flex h-full w-full"
        data-value="-1"
      >
        <div className="galaxy w-full bg-galaxy2 bg-auto" data-value="-1" />
      </section>
      <section
        className="gal-scroll absolute flex h-full w-full"
        data-value="-3"
      >
        <div className="galaxy w-full bg-galaxy3 bg-auto" data-value="-3" />
      </section>
      <section
        className="gal-scroll absolute flex h-full w-full"
        data-value="-9"
      >
        <div className="galaxy w-full bg-galaxy4 bg-auto" data-value="-9" />
      </section>
      <main className="main absolute flex h-full w-full items-center justify-center overflow-y-auto">
        <div className="flex h-[4100px] items-center font-serif text-lg font-semibold text-white">
          Galaxy
        </div>
      </main>
    </>
  )
}
