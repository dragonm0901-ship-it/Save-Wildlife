import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function useGsapAnimations() {
  const triggers = []

  function fadeUp(elements, options = {}) {
    const defaults = {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: 'power3.out',
      ...options,
    }

    if (!elements || (typeof elements === 'string' && !document.querySelector(elements))) return

    return gsap.from(elements, {
      ...defaults,
      scrollTrigger: {
        trigger: options.trigger || elements,
        start: options.start || 'top 85%',
        end: options.end || 'bottom 20%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
    })
  }

  function fadeIn(elements, options = {}) {
    if (!elements || (typeof elements === 'string' && !document.querySelector(elements))) return

    return gsap.from(elements, {
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      ...options,
      scrollTrigger: {
        trigger: options.trigger || elements,
        start: 'top 85%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
    })
  }

  function parallax(element, options = {}) {
    const speed = options.speed || 0.3
    return gsap.to(element, {
      y: () => -(ScrollTrigger.maxScroll(window) * speed),
      ease: 'none',
      scrollTrigger: {
        trigger: options.trigger || element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        ...options.scrollTrigger,
      },
    })
  }

  function clipReveal(element, options = {}) {
    return gsap.from(element, {
      clipPath: options.direction === 'horizontal'
        ? 'inset(0 100% 0 0)'
        : 'inset(100% 0 0 0)',
      duration: 1.2,
      ease: 'power4.inOut',
      ...options,
      scrollTrigger: {
        trigger: options.trigger || element,
        start: 'top 80%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
    })
  }

  function staggerChildren(parent, childSelector, options = {}) {
    const children = typeof parent === 'string'
      ? document.querySelectorAll(`${parent} ${childSelector}`)
      : parent?.querySelectorAll(childSelector)

    if (!children || children.length === 0) return

    return gsap.from(children, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      ...options,
      scrollTrigger: {
        trigger: parent,
        start: 'top 80%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
    })
  }

  function splitTextReveal(element, options = {}) {
    if (!element) return

    const text = element.textContent
    const chars = text.split('')
    element.textContent = ''
    element.style.overflow = 'hidden'

    chars.forEach(char => {
      const span = document.createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char
      span.style.display = 'inline-block'
      span.style.willChange = 'transform'
      element.appendChild(span)
    })

    return gsap.from(element.children, {
      y: '110%',
      rotateX: -80,
      opacity: 0,
      duration: 0.9,
      stagger: 0.02,
      ease: 'power4.out',
      ...options,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
    })
  }

  function counterAnimation(element, endValue, options = {}) {
    const obj = { value: 0 }
    return gsap.to(obj, {
      value: endValue,
      duration: options.duration || 2,
      ease: 'power2.out',
      onUpdate: () => {
        element.textContent = Math.round(obj.value) + (options.suffix || '')
      },
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
    })
  }

  function magneticHover(element, strength = 0.3) {
    if (typeof window === 'undefined') return

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)',
      })
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }

  function createScrollTrigger(config) {
    const st = ScrollTrigger.create(config)
    triggers.push(st)
    return st
  }

  function refresh() {
    ScrollTrigger.refresh()
  }

  function cleanup() {
    triggers.forEach(st => st.kill())
    triggers.length = 0
  }

  onUnmounted(() => {
    cleanup()
  })

  return {
    gsap,
    ScrollTrigger,
    fadeUp,
    fadeIn,
    parallax,
    clipReveal,
    staggerChildren,
    splitTextReveal,
    counterAnimation,
    magneticHover,
    createScrollTrigger,
    refresh,
    cleanup,
  }
}
