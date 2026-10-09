<script setup>
  import { email, github } from '../../data/contact'

  const facts = [
    { label: 'Especialidad', value: 'PHP y Laravel, de la v8 a la actual' },
    { label: 'Experiencia', value: 'Más de 4 años · 12 proyectos entregados' },
    { label: 'Frontend', value: 'Vue.js, Inertia.js y Livewire con Tailwind' },
    { label: 'Despliegue', value: 'Nginx en VPS, hosting compartido y Ubuntu Server físico' },
  ]
</script>

<template>
  <section id="inicio" class="pt-16">
    <div class="mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-12 sm:px-6 md:grid-cols-[1fr_16rem] md:items-start lg:grid-cols-[1fr_20rem] lg:gap-16 lg:pb-28 lg:pt-20">

      <div class="order-2 md:order-1">
        <h1 class="rise type-display text-[clamp(3.25rem,10vw,6rem)] text-ink">José Gallegos</h1>
        <p class="rise mt-3 text-2xl font-semibold text-accent sm:text-3xl" style="--i: 1">Desarrollador web</p>
        <p class="rise mt-6 max-w-xl text-xl leading-relaxed text-ink-soft" style="--i: 2">
          Construyo aplicaciones web a medida: backends sólidos con Laravel, interfaces con Vue
          y el despliegue en el servidor donde todo corre.
        </p>

        <dl class="rise mt-10 max-w-2xl divide-y divide-ink/10 border-y border-ink/10" style="--i: 3">
          <div v-for="fact in facts" :key="fact.label"
            class="grid gap-1 py-3.5 sm:grid-cols-[9rem_1fr] sm:items-baseline sm:gap-4">
            <dt class="type-label">{{ fact.label }}</dt>
            <dd class="font-medium text-ink">{{ fact.value }}</dd>
          </div>
        </dl>

        <div class="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-4" style="--i: 4">
          <a href="#contacto"
            class="inline-flex items-center btn-primary rounded-md bg-accent hover:bg-accent-dark px-6 py-3.5 text-base font-semibold text-paper">
            Contactarme
          </a>
          <a href="#proyectos" class="link-grow font-semibold text-ink">
            Ver proyectos
          </a>
        </div>

        <p class="rise mt-8 flex flex-col gap-2 text-sm text-ink-soft sm:flex-row sm:gap-0" style="--i: 5">
          <a :href="`mailto:${email}`" class="self-start underline decoration-ink/25 hover:text-ink hover:decoration-ink">{{ email }}</a>
          <span class="mx-2 hidden sm:inline" aria-hidden="true">·</span>
          <a :href="github.href" target="_blank" rel="noopener noreferrer"
            class="self-start underline decoration-ink/25 hover:text-ink hover:decoration-ink">github.com/{{ github.display }}</a>
        </p>
      </div>

      <div class="order-1 md:order-2">
        <img src="/img/jose_gallegos.png" alt="Fotografía de José Gallegos" width="833" height="765"
          class="rise aspect-[4/5] w-44 rounded-lg object-cover object-top sm:w-56 md:w-full" style="--i: 1" />
      </div>
    </div>
  </section>
</template>
