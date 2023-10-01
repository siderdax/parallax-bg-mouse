'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useLayoutEffect, useRef } from 'react'

export default function Page() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let ctx = gsap.context(() => {
      const scrollTrigger = {
        scroller: '.main',
        trigger: '.word',
        start: 'center center',
        end: 'bottom top',
        scrub: true,
        markers: true,
      }
      const scrollSmoother = {
        smooth: 2,
      }
      gsap.to('.gal-scroll-0', {
        scrollTrigger,
        scrollSmoother,
        y: -50,
      })
      gsap.to('.gal-scroll-1', {
        scrollTrigger,
        scrollSmoother,
        y: -70,
      })
      gsap.to('.gal-scroll-2', {
        scrollTrigger,
        scrollSmoother,
        y: -90,
      })
      gsap.to('.gal-scroll-3', {
        scrollTrigger,
        scrollSmoother,
        y: -110,
      })
    })

    return () => ctx.revert() // cleanup
  }, [])

  return (
    <>
      <section
        className='to-100%" absolute h-full w-full
        bg-gradient-to-b from-black from-50% via-indigo-900 via-90% to-purple-800'
      />
      <section
        className="gal-scroll-0 absolute flex h-full w-full"
        data-value="-5"
      >
        <div className="galaxy w-full bg-galaxy1 bg-auto" data-value="-5" />
      </section>
      <section
        className="gal-scroll-1 absolute flex h-full w-full"
        data-value="-1"
      >
        <div className="galaxy w-full bg-galaxy2 bg-auto" data-value="-1" />
      </section>
      <section
        className="gal-scroll-2 absolute flex h-full w-full"
        data-value="-3"
      >
        <div className="galaxy w-full bg-galaxy3 bg-auto" data-value="-3" />
      </section>
      <section
        className="gal-scroll-3 absolute flex h-full w-full"
        data-value="-9"
      >
        <div className="galaxy w-full bg-galaxy4 bg-auto" data-value="-9" />
      </section>
      <main className="main absolute flex h-full w-full items-center justify-center overflow-y-auto">
        <div className="word flex h-[4100px] items-center font-serif text-lg font-semibold text-white">
          Galaxy
        </div>
      </main>
    </>
  )
}
