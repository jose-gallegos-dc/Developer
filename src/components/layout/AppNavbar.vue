<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const menuOpen = ref(false)

const links = [
  { label: 'Perfil', href: '#perfil' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Servicios', href: '#servicios' },
]

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header data-scroll-shadow class="site-header fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Principal">

      <a href="#inicio" class="flex items-baseline gap-3">
        <span class="type-display text-2xl text-ink">José Gallegos</span>
        <span class="hidden text-sm text-ink-soft sm:inline">Desarrollador web</span>
      </a>

      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href"
            class="text-[0.95rem] font-medium text-ink-soft transition-colors duration-200 hover:text-ink">
            {{ link.label }}
          </a>
        </li>
        <li>
          <a href="#contacto"
            class="inline-flex items-center btn-primary rounded-md bg-accent hover:bg-accent-dark px-4 py-2 text-sm font-semibold text-paper">
            Contacto
          </a>
        </li>
      </ul>

      <button class="-mr-2 p-2 text-ink md:hidden" :aria-expanded="menuOpen" aria-controls="menu-movil"
        :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'" @click="menuOpen = !menuOpen">
        <Icon :icon="menuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="size-6" />
      </button>
    </nav>

    <Transition name="menu">
    <div v-if="menuOpen" id="menu-movil" class="border-t border-ink/10 bg-paper px-4 pb-6 pt-2 md:hidden">
      <ul class="flex flex-col">
        <li v-for="link in links" :key="link.href" class="border-b border-ink/10">
          <a :href="link.href" class="block py-3 text-lg font-medium text-ink" @click="closeMenu">{{ link.label }}</a>
        </li>
      </ul>
      <a href="#contacto" class="btn-primary mt-5 inline-flex rounded-md bg-accent hover:bg-accent-dark px-5 py-3 text-sm font-semibold text-paper"
        @click="closeMenu">
        Contacto
      </a>
    </div>
    </Transition>
  </header>
</template>
