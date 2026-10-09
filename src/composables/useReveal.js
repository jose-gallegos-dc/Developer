import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/*
 * Animaciones de scroll de todo el sitio, declaradas por atributo:
 *   data-reveal        → sube y aparece; los que entran juntos se escalonan
 *   data-reveal-image  → la captura se descubre desde un recorte y se asienta
 *   data-scroll-shadow → recibe .is-scrolled en cuanto la página deja la parte superior (scroll pasivo)
 * Sin JavaScript o con movimiento reducido, todo queda visible y estático.
 */
export function useReveal() {
  let mm

  onMounted(() => {
    mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.set('[data-reveal]', { autoAlpha: 0, y: 24 })
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 88%',
        once: true,
        onEnter: (els) => gsap.to(els, {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'expo.out',
          stagger: 0.08,
          clearProps: 'transform',
        }),
      })

      gsap.utils.toArray('[data-reveal-image]').forEach((figure) => {
        gsap.timeline({ scrollTrigger: { trigger: figure, start: 'top 85%', once: true } })
          .fromTo(figure,
            { clipPath: 'inset(8% 6% 8% 6% round 0.5rem)', autoAlpha: 0 },
            { clipPath: 'inset(0% 0% 0% 0% round 0.5rem)', autoAlpha: 1, duration: 1.1, ease: 'expo.out', clearProps: 'clipPath' })
          .fromTo(figure.querySelector('img'),
            { scale: 1.08 },
            { scale: 1, duration: 1.4, ease: 'expo.out', clearProps: 'transform' },
            0)
      })
    })

    header = document.querySelector('[data-scroll-shadow]')
    if (header) {
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
    }
  })

  let header
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 8)
  }

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    mm?.revert()
    ScrollTrigger.getAll().forEach((t) => t.kill())
  })
}
