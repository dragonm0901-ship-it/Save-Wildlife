import { onMounted, onUnmounted } from 'vue'

let SR = null

export function useScrollReveal() {
  const instances = []

  async function initScrollReveal() {
    if (typeof window === 'undefined') return
    if (!SR) {
      const module = await import('scrollreveal')
      SR = module.default
    }
    return SR
  }

  function reveal(selector, options = {}) {
    if (!SR) return

    const defaults = {
      distance: '40px',
      duration: 800,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      interval: 100,
      reset: false,
      ...options,
    }

    const instance = SR().reveal(selector, defaults)
    instances.push(instance)
    return instance
  }

  function fadeUp(selector, options = {}) {
    return reveal(selector, { origin: 'bottom', ...options })
  }

  function fadeDown(selector, options = {}) {
    return reveal(selector, { origin: 'top', ...options })
  }

  function fadeLeft(selector, options = {}) {
    return reveal(selector, { origin: 'left', ...options })
  }

  function fadeRight(selector, options = {}) {
    return reveal(selector, { origin: 'right', ...options })
  }

  function scaleIn(selector, options = {}) {
    return reveal(selector, {
      distance: '0px',
      scale: 0.85,
      ...options,
    })
  }

  function cleanup() {
    if (SR) {
      SR().destroy()
    }
  }

  return {
    initScrollReveal,
    reveal,
    fadeUp,
    fadeDown,
    fadeLeft,
    fadeRight,
    scaleIn,
    cleanup,
  }
}
