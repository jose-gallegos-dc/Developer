<script setup>
import { Icon } from '@iconify/vue'

const services = [
  {
    title: 'Backend con Laravel',
    icon: 'heroicons:code-bracket',
    description: 'Construyo el núcleo de tu aplicación: APIs REST bien estructuradas, lógica de negocio compleja, autenticación, roles y permisos, y bases de datos relacionales optimizadas. Con PHP y Laravel desde la v8 hasta la actual.',
    items: [
      'APIs REST & autenticación',
      'Roles, permisos & seguridad',
      'Bases de datos relacionales',
      'Pasarelas de pago (MercadoPago, Stripe)',
      'Migraciones, seeders & jobs',
      'Facturación electrónica (SAT)',
    ],
  },
  {
    title: 'Interfaces modernas',
    icon: 'heroicons:computer-desktop',
    description: 'Desarrollo frontends reactivos con Vue.js, Inertia.js y Livewire integrados a Laravel. Interfaces construidas con Tailwind CSS: rápidas, responsivas y pensadas para que el usuario las disfrute sin fricciones.',
    items: [
      'Vue.js & Inertia.js (SPA)',
      'Livewire (reactivo sin JS extra)',
      'Tailwind CSS responsivo',
      'Componentes reutilizables',
      'UX coherente con el backend',
    ],
  },
  {
    title: 'Soluciones a medida',
    icon: 'heroicons:puzzle-piece',
    description: '¿Tienes un proceso que quieres digitalizar o una idea que aún no existe? Diseño e implemento la solución completa: desde el modelado de datos hasta la interfaz final, adaptada exactamente a tu negocio.',
    items: [
      'Sistemas POS multisucursal',
      'Plataformas SaaS',
      'E-commerce con pagos integrados',
      'Paneles administrativos',
      'Control de inventario & reportes',
    ],
  },
  {
    title: 'Despliegue en producción',
    icon: 'heroicons:server-stack',
    description: 'Tu aplicación merece un entorno estable y seguro. Configuro servidores Nginx en VPS o en hierro físico con Ubuntu Server: SSL, dominio, variables de entorno y puesta en marcha sin sorpresas.',
    items: [
      'Ubuntu Server (físico o VPS)',
      'Nginx + SSL & dominio',
      'DigitalOcean & hosting compartido',
      'Variables de entorno & seguridad',
      'Puesta en marcha & soporte inicial',
    ],
  },
]
</script>

<template>
  <section id="servicios" class="py-24 bg-slate-900/40">
    <div class="max-w-6xl mx-auto px-6">

      <p class="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3 text-center" data-aos="fade-up">
        03. Servicios
      </p>
      <h2 class="text-4xl font-bold mb-4 tracking-tight text-center" data-aos="fade-up" data-aos-delay="50">
        ¿En qué puedo ayudarte?
      </h2>
      <p class="text-slate-400 mb-16 text-center mx-auto max-w-xl" data-aos="fade-up" data-aos-delay="100">
        No vendo horas — construyo soluciones. Si tienes un proyecto claro o una idea por definir,
        podemos trabajarlo juntos de principio a fin.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          class="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-400/30 transition-colors duration-300 flex flex-col"
          data-aos="fade-up"
          :data-aos-delay="i * 80"
        >
          <Icon :icon="service.icon" class="w-9 h-9 text-cyan-400 mb-4 shrink-0" />
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
