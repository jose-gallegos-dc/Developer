<script setup>
const services = [
  {
    title: 'Backend con Laravel',
    description: 'El núcleo de la aplicación: APIs REST bien estructuradas, lógica de negocio compleja, autenticación, roles y permisos, y bases de datos relacionales optimizadas. Con PHP y Laravel desde la v8 hasta la actual.',
    items: [
      'APIs REST y autenticación',
      'Roles, permisos y seguridad',
      'Bases de datos relacionales',
      'Pasarelas de pago (Mercado Pago, Stripe)',
      'Migraciones, seeders y jobs',
      'Facturación electrónica (SAT)',
    ],
  },
  {
    title: 'Interfaces modernas',
    description: 'Frontends reactivos con Vue.js, Inertia.js y Livewire integrados a Laravel, construidos con Tailwind CSS: rápidos, responsivos y pensados para usarse sin fricciones.',
    items: [
      'Vue.js e Inertia.js (SPA)',
      'Livewire (reactivo sin JS extra)',
      'Tailwind CSS responsivo',
      'Componentes reutilizables',
      'UX coherente con el backend',
    ],
  },
  {
    title: 'Soluciones a medida',
    description: 'Procesos por digitalizar o ideas que aún no existen: diseño e implemento la solución completa, desde el modelado de datos hasta la interfaz final, adaptada al negocio.',
    items: [
      'Sistemas POS multisucursal',
      'Plataformas SaaS',
      'E-commerce con pagos integrados',
      'Paneles administrativos',
      'Control de inventario y reportes',
    ],
  },
  {
    title: 'Despliegue en producción',
    description: 'Un entorno estable y seguro: servidores Nginx en VPS o en hierro físico con Ubuntu Server, SSL, dominio, variables de entorno y puesta en marcha sin sorpresas.',
    items: [
      'Ubuntu Server (físico o VPS)',
      'Nginx, SSL y dominio',
      'DigitalOcean y hosting compartido',
      'Variables de entorno y seguridad',
      'Puesta en marcha y soporte inicial',
    ],
  },
]
</script>

<template>
  <section id="servicios" class="bg-mist">
    <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">

      <div class="grid gap-6 lg:grid-cols-12 lg:items-end">
        <h2 data-reveal class="type-display text-5xl text-ink sm:text-6xl lg:col-span-7">¿En qué puedo ayudarte?</h2>
        <p data-reveal class="max-w-md text-ink lg:col-span-5">
          No vendo horas: construyo soluciones. Con un proyecto claro o una idea por definir,
          lo trabajamos de principio a fin.
        </p>
      </div>

      <table class="mt-14 w-full border-collapse text-left">
        <thead class="hidden md:table-header-group">
          <tr class="border-b border-ink/20">
            <th scope="col" class="type-label w-[28%] pb-3 pr-6">Concepto</th>
            <th scope="col" class="type-label pb-3 pr-6">Descripción</th>
            <th scope="col" class="type-label w-[30%] pb-3">Incluye</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="service in services" :key="service.title" data-reveal
            class="block border-b border-ink/10 py-8 first:border-t first:border-ink/20 md:table-row md:py-0 md:first:border-t-0">
            <th scope="row" class="block pr-6 align-top md:table-cell md:py-8">
              <span class="text-xl font-semibold text-ink">{{ service.title }}</span>
            </th>
            <td class="mt-3 block max-w-[60ch] pr-6 align-top leading-relaxed text-ink-soft md:mt-0 md:table-cell md:py-8">
              {{ service.description }}
            </td>
            <td class="mt-5 block align-top md:mt-0 md:table-cell md:py-8">
              <ul class="space-y-1.5">
                <li v-for="item in service.items" :key="item" class="flex gap-2.5 text-[0.95rem] text-ink"><span class="mt-[0.6em] size-1 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>{{ item }}</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </section>
</template>
