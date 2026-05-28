<script setup>
const services = [
  {
    title: 'Desarrollo Backend',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.',
    items: ['PHP & Laravel', 'APIs REST', 'Autenticación', 'Migraciones'],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  },
  {
    title: 'Desarrollo Frontend',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.',
    items: ['Vue.js', 'Inertia.js', 'Tailwind CSS', 'JavaScript'],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  },
  {
    title: 'Bases de Datos',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.',
    items: ['MySQL', 'MariaDB', 'SQL Server', 'Optimización'],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/></svg>`,
  },
  {
    title: 'Despliegue & Servidores',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.',
    items: ['Nginx', 'Linux', 'SSL/TLS', 'CI/CD'],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14m-7-7l7 7-7 7M3 5l2 2-2 2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v18"/></svg>`,
  },
]
</script>

<template>
  <section id="servicios" class="py-24 bg-slate-900/40">
    <div class="max-w-6xl mx-auto px-6">

      <p class="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">03. Servicios</p>
      <h2 class="text-4xl font-bold mb-4 tracking-tight">¿En qué puedo ayudarte?</h2>
      <p class="text-slate-400 mb-16 max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-400/30 transition-colors duration-300"
        >
          <div class="w-10 h-10 text-cyan-400 mb-4" v-html="service.icon"></div>
          <h3 class="text-white font-semibold text-lg mb-2">{{ service.title }}</h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-4">{{ service.description }}</p>
          <ul class="space-y-1.5">
            <li v-for="item in service.items" :key="item" class="flex items-center gap-2 text-sm text-slate-300">
              <span class="text-cyan-400 text-xs font-mono">▸</span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>
