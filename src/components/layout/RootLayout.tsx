'use client'
import { RootLayoutContext } from '@/context/RootLayoutContext'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'
import { GridPattern } from '../grids/GridPattern'
import { MotionConfig, motion, useReducedMotion } from 'framer-motion'
import { Header } from '../navigation/Header'
import { MenuIcon } from '../icons/collection/MenuIcon'
import { Cross } from '../icons/collection/Cross'
import { Container } from '../shared/container'
import { Footer } from '../navigation/Footer'
import Link from 'next/link'

export function Layout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let openRef = useRef<React.ElementRef<'button'>>(null)
  let closeRef = useRef<React.ElementRef<'button'>>(null)
  let navRef = useRef<React.ElementRef<'div'>>(null)
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
          className="absolute left-0 right-0 top-2 z-40 pt-14"
          aria-hidden={expanded ? 'true' : undefined}
          // @ts-ignore (https://github.com/facebook/react/issues/17157)
          inert={expanded ? '' : undefined}
        >
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded)
              window.setTimeout(
                () => closeRef.current?.focus({ preventScroll: true }),
              )
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
          aria-hidden={expanded ? undefined : 'true'}
          // @ts-ignore (https://github.com/facebook/react/issues/17157)
          inert={expanded ? undefined : ''}
        >
          <motion.div layout className="bg-neutral-800">
            <div ref={navRef} className="bg-neutral-950 pb-16 pt-14">
              <Header
                invert
                panelId={panelId}
                icon={Cross}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded)
                  window.setTimeout(
                    () => openRef.current?.focus({ preventScroll: true }),
                  )
                }}
              />
            </div>

            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                  <Link href="/blog">
                    <div>
                      <h2 className="font-display text-base font-semibold text-white">
                        Blog
                      </h2>
                    </div>
                  </Link>
                  <div className="sm:border-l sm:border-transparent sm:pl-16">
                    <Link href={'/ceo'}>
                    <h2 className="font-display text-base font-semibold text-white">
                      Meet the CEO
                    </h2>
                    </Link>
                  </div>
                  <Link href="/about">
                    <div>
                      <h2 className="font-display text-base font-semibold text-white">
                        About
                      </h2>
                    </div>
                  </Link>
                  <div className="sm:border-l sm:border-transparent sm:pl-16">
                    <Link href={'/ceo'}>
                    <h2 className="font-display text-base font-semibold text-white">
                      Meet the CEO
                    </h2>
                    </Link>
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-96}
            interactive
          />

          <main className="w-full flex-auto">{children}</main>
          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}
