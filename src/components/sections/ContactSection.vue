<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })

function submit() {
  console.log('form submit', form.value)
}
</script>

<template>
  <section id="contacto" class="py-24">
    <div class="max-w-6xl mx-auto px-6">

      <p class="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">04. Contacto</p>
      <h2 class="text-4xl font-bold mb-4 tracking-tight">Hablemos</h2>
      <p class="text-slate-400 mb-16 max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">

        <div class="space-y-6">
          <p class="text-slate-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation.
          </p>
          <div class="space-y-4 pt-2">
            <div class="flex items-center gap-3">
              <svg class="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span class="text-slate-300 font-mono text-sm">jose@ejemplo.com</span>
            </div>
            <div class="flex items-center gap-3">
              <svg class="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span class="text-slate-300 font-mono text-sm">LinkedIn / GitHub</span>
            </div>
          </div>
        </div>

        <form @submit.prevent="submit" class="space-y-4">
          <div>
            <label class="block text-xs text-slate-500 mb-1.5 font-mono uppercase tracking-wider">Nombre</label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Tu nombre"
              class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
              required
            />
          </div>
          <div>
            <label class="block text-xs text-slate-500 mb-1.5 font-mono uppercase tracking-wider">Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="tu@email.com"
              class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
              required
            />
          </div>
          <div>
            <label class="block text-xs text-slate-500 mb-1.5 font-mono uppercase tracking-wider">Mensaje</label>
            <textarea
              v-model="form.message"
              rows="5"
              placeholder="Cuéntame sobre tu proyecto..."
              class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-cyan-400 text-slate-950 font-semibold py-3 rounded-lg hover:bg-cyan-300 transition-colors duration-200 text-sm"
          >
            Enviar mensaje &rarr;
          </button>
        </form>

      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-slate-800">
      <p class="text-slate-600 text-xs text-center font-mono">
        &copy; 2026 &middot; Jose Gallegos &middot; Desarrollado con Vue + Vite
      </p>
    </div>
  </section>
</template>
