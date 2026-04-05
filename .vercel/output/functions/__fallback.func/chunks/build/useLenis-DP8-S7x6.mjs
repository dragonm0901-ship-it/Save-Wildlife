import { ref } from 'vue';
import Lenis from 'lenis';

let lenisInstance = null;
let rafId = null;
function useLenis() {
  const isReady = ref(false);
  function initLenis() {
    if (lenisInstance) return lenisInstance;
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false
    });
    function raf(time) {
      lenisInstance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    isReady.value = true;
    return lenisInstance;
  }
  function destroyLenis() {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    if (lenisInstance) {
      lenisInstance.destroy();
      lenisInstance = null;
    }
    isReady.value = false;
  }
  function scrollTo(target, options = {}) {
    if (lenisInstance) {
      lenisInstance.scrollTo(target, {
        offset: 0,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options
      });
    }
  }
  function stop() {
    if (lenisInstance) lenisInstance.stop();
  }
  function start() {
    if (lenisInstance) lenisInstance.start();
  }
  function getInstance() {
    return lenisInstance;
  }
  return {
    isReady,
    initLenis,
    destroyLenis,
    scrollTo,
    stop,
    start,
    getInstance
  };
}

export { useLenis as u };
//# sourceMappingURL=useLenis-DP8-S7x6.mjs.map
