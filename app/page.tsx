'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import galaxy1 from '../resource/group1.png'
import galaxy2 from '../resource/group2.png'
import galaxy3 from '../resource/group3.png'
import galaxy4 from '../resource/group4.png'

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
    <main className="flex h-full bg-gradient-to-b from-black to-indigo-900">
      <Image
        className="galaxy"
        src={galaxy1}
        data-value="-2"
        alt="star1"
        fill
      />
      <Image className="galaxy" src={galaxy2} data-value="1" alt="star2" fill />
      <Image
        className="galaxy"
        src={galaxy3}
        data-value="-3"
        alt="star3"
        fill
      />
      <Image
        className="galaxy"
        src={galaxy4}
        data-value="2 "
        alt="star4"
        fill
      />
    </main>
  )
}
