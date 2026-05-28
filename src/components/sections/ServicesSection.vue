<script setup>
const services = [
  {
    title: 'Backend con Laravel',
    description: 'Construyo el núcleo de tu aplicación: APIs REST bien estructuradas, lógica de negocio compleja, autenticación, roles y permisos, y bases de datos relacionales optimizadas. Con PHP y Laravel desde la v8 hasta la actual.',
    items: [
      'APIs REST & autenticación',
      'Roles, permisos & seguridad',
      'Bases de datos relacionales',
      'Pasarelas de pago (MercadoPago, Stripe)',
      'Migraciones, seeders & jobs',
      'Facturación electrónica (SAT)',
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
    </svg>`,
  },
  {
    title: 'Interfaces modernas',
    description: 'Desarrollo frontends reactivos con Vue.js, Inertia.js y Livewire integrados a Laravel. Interfaces construidas con Tailwind CSS: rápidas, responsivas y pensadas para que el usuario las disfrute sin fricciones.',
    items: [
      'Vue.js & Inertia.js (SPA)',
      'Livewire (reactivo sin JS extra)',
      'Tailwind CSS responsivo',
      'Componentes reutilizables',
      'UX coherente con el backend',
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>`,
  },
  {
    title: 'Soluciones a medida',
    description: '¿Tienes un proceso que quieres digitalizar o una idea que aún no existe? Diseño e implemento la solución completa: desde el modelado de datos hasta la interfaz final, adaptada exactamente a tu negocio.',
    items: [
      'Sistemas POS multisucursal',
      'Plataformas SaaS',
      'E-commerce con pagos integrados',
      'Paneles administrativos',
      'Control de inventario & reportes',
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/>
    </svg>`,
  },
  {
    title: 'Despliegue en producción',
    description: 'Tu aplicación merece un entorno estable y seguro. Configuro servidores Nginx en VPS o en hierro físico con Ubuntu Server: SSL, dominio, variables de entorno y puesta en marcha sin sorpresas.',
    items: [
      'Ubuntu Server (físico o VPS)',
      'Nginx + SSL & dominio',
      'DigitalOcean & hosting compartido',
      'Variables de entorno & seguridad',
      'Puesta en marcha & soporte inicial',
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
    </svg>`,
  },
]
</script>

<template>
  <section id="servicios" class="py-24 bg-slate-900/40">
    <div class="max-w-6xl mx-auto px-6">

      <p class="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3 text-center">03. Servicios</p>
      <h2 class="text-4xl font-bold mb-4 tracking-tight text-center">¿En qué puedo ayudarte?</h2>
      <p class="text-slate-400 mb-16 text-center mx-auto max-w-xl">
        No vendo horas — construyo soluciones. Si tienes un proyecto claro o una idea por definir,
        podemos trabajarlo juntos de principio a fin.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-400/30 transition-colors duration-300 flex flex-col"
        >
          <div class="w-10 h-10 text-cyan-400 mb-4 shrink-0" v-html="service.icon"></div>
          <h3 class="text-white font-semibold text-lg mb-2">{{ service.title }}</h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-5">{{ service.description }}</p>
          <ul class="space-y-2 mt-auto">
            <li
              v-for="item in service.items"
              :key="item"
              class="flex items-center gap-2 text-sm text-slate-300"
            >
              <span class="text-cyan-400 font-mono text-xs shrink-0">▸</span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>
