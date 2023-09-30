'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useLayoutEffect, useRef } from 'react'
import './style.css'

export default function Page() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.shoe',
            start: 'center center',
            end: 'bottom top',
            scrub: true,
            pin: true,
            markers: true,
          },
        })
        .from('.midsole', { y: innerHeight * 1.5 })
        .from('.outsole', { y: innerHeight * 1.5 })
    })

    return () => ctx.revert() // cleanup
  }, [])

  return (
    <>
      <h1 className="header-section">Scroll to construct a shoe</h1>

      <section className="shoe">
        <img
          src="https://uploads-ssl.webflow.com/5d3ee7c0c89f6a2d122c0695/5d84da29b46cb1403688b139_outsole.png"
          className="outsole piece"
          alt="outsole"
        />
        <img
          src="https://uploads-ssl.webflow.com/5d3ee7c0c89f6a2d122c0695/5d84d9ecb32e46bc5f1f8a8a_component.png?"
          className="heel piece"
          alt="heel"
        />
        <img
          src="https://uploads-ssl.webflow.com/5d3ee7c0c89f6a2d122c0695/5d84da293b7f75e5a42bcacd_midsole.png?"
          className="midsole piece"
          alt="midsole"
        />
      </section>

      <h1 className="header-section">Cool, right?</h1>
    </>
  )
}
