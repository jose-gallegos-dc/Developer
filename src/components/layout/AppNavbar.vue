<script setup>
  import { ref } from 'vue'

  const menuOpen = ref(false)

  const links = [
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Servicios', href: '#servicios' },
  ]

  function closeMenu() {
    menuOpen.value = false
  }
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

      <a href="#inicio" class="flex items-center gap-2.5 group">
        <span class="text-xl font-bold tracking-tight text-white">JG</span>
        <span class="text-xs text-slate-500 leading-tight hidden sm:block">
          Desarrollador<br>Web
        </span>
      </a>

      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="text-slate-400 hover:text-white text-sm transition-colors duration-200">{{
            link.label }}</a>
        </li>
      </ul>

      <a href="#contacto"
        class="hidden md:inline-flex bg-cyan-400 text-slate-950 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-cyan-300 transition-colors duration-200">
        Contacto &rarr;
      </a>

      <button class="md:hidden text-slate-400 hover:text-white p-1" @click="menuOpen = !menuOpen" aria-label="Menú">
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <div v-if="menuOpen" class="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-5">
      <ul class="flex flex-col gap-4">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="text-slate-300 hover:text-white text-sm block transition-colors"
            @click="closeMenu">{{ link.label }}</a>
        </li>
        <li class="pt-2 border-t border-slate-800">
          <a href="#contacto" class="bg-cyan-400 text-slate-950 text-sm font-semibold px-4 py-2 rounded-lg inline-block"
            @click="closeMenu">Hablemos &rarr;</a>
        </li>
      </ul>
    </div>
  </header>
</template>
