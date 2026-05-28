<script setup>
  import { onMounted, ref } from 'vue'
  import { gsap } from 'gsap'
  import { Icon } from '@iconify/vue'
  import '../../assets/css/hero.css'

  const photoWrapper = ref(null)
  const photoContainer = ref(null)
  const realPhoto = ref(null)

  function runReveal() {
    const wrapper = photoWrapper.value
    const container = photoContainer.value
    const img = realPhoto.value
    if (!wrapper || !container || !img) return

    const tl = gsap.timeline({ delay: 0.1 })

    // 1. El wrapper entra deslizándose desde la izquierda (aprovecha el espacio vacío)
    tl.from(wrapper, {
      x: -90,
      opacity: 0,
      duration: 0.55,
      ease: 'power3.out',
    })
      // 2. Wipe de izquierda a derecha dentro del círculo
      .fromTo(
        container,
        { clipPath: 'inset(0 100% 0 0 round 9999px)' },
        { clipPath: 'inset(0 0% 0 0 round 9999px)', duration: 0.55, ease: 'power2.inOut' },
        '<0.1',
      )
      // 3. Glow aparece con rebote suave
      .from('.photo-glow', {
        opacity: 0,
        scale: 0.4,
        duration: 0.7,
        ease: 'back.out(1.4)',
      }, '<0.15')
  }

  onMounted(() => {
    const img = realPhoto.value
    if (!img) return
    if (img.complete && img.naturalWidth > 0) {
      runReveal()
    } else {
      img.addEventListener('load', runReveal, { once: true })
      img.addEventListener('error', runReveal, { once: true })
    }
  })
</script>

<template>
  <section id="inicio" class="hero-section min-h-screen pt-16 flex items-center relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">

      <!-- Foto con animación wipe desde la izquierda -->
      <div class="order-1 lg:order-2 flex justify-center">
        <div ref="photoWrapper" class="relative">
          <div class="photo-glow absolute -inset-4 rounded-full opacity-20 blur-2xl"></div>
          <div ref="photoContainer"
            class="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-slate-700">
            <img ref="realPhoto" src="/img/jose_gallegos.png" alt="José Gallegos"
              class="w-full h-full object-cover object-top" />
          </div>
        </div>
      </div>

      <!-- Texto -->
      <div class="order-2 lg:order-1 space-y-7 text-center lg:text-left">

        <div data-aos="fade-right">
          <p class="text-slate-400 text-base font-light tracking-wide mb-1">Hola, soy</p>
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight text-white">
            José Gallegos
          </h1>
          <p class="text-2xl lg:text-3xl font-semibold italic text-cyan-400 mt-2">
            Desarrollador Web
          </p>
        </div>

        <p class="text-slate-400 text-base leading-relaxed max-w-md mx-auto lg:mx-0" data-aos="fade-right"
          data-aos-delay="100">
          Me especializo en <span class="text-slate-200 font-medium">Laravel</span> para construir
          backends sólidos, <span class="text-slate-200 font-medium">Vue.js</span> para interfaces
          que se sienten rápidas, bases de datos relacionales bien diseñadas y despliegues en
          servidores compartidos o dedicados —
          <span class="text-slate-200 font-medium">incluso servidores físicos con Ubuntu</span>.
          Si tienes un proyecto en mente,
          <span class="text-cyan-400 font-medium">construyámoslo juntos</span>.
        </p>

        <div class="flex items-center gap-5 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="200">
          <a href="https://wa.me/529612491813?text=Hola,%20Me%20conocer%20m%C3%A1s%20sobre%20tus%20servicios"
            target="_blank" rel="noopener noreferrer"
            class="btn-shimmer inline-flex items-center gap-2 border border-slate-500 text-slate-200 font-medium px-5 py-2.5 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
            <Icon icon="ri:whatsapp-fill" class="w-4 h-4 shrink-0" />
            Conversemos
          </a>

          <a href="https://github.com/jose-gallegos-dc" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            class="text-slate-500 hover:text-cyan-400 transition-colors">
            <Icon icon="mdi:github" class="w-6 h-6" />
          </a>
        </div>

      </div>
    </div>
  </section>
</template>
