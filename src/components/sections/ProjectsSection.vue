<script setup>
  const projects = [
    {
      name: 'Unifam',
      type: 'Sistema POS',
      description: 'POS multisucursal con precios diferenciados por unidad, control de inventario completo (entradas, salidas, transferencias y resurtido) y facturación electrónica 4.0 integrada y validada con el SAT.',
      tech: ['Laravel 12', 'Vue 3', 'Tailwind', 'MariaDB'],
      image: '/img/projects/unifam.png',
    },
    {
      name: 'Modii',
      type: 'Plataforma SaaS',
      description: 'Plataforma centralizada para gestión de clientes, proveedores y wallets. Procesa pagos, cobros y movimientos financieros en tiempo real con una interfaz reactiva y sin recargas.',
      tech: ['Laravel 12', 'Livewire 4', 'Tailwind'],
      image: '/img/projects/modii.png',
    },
    {
      name: 'Viáticos Cauda',
      type: 'Aplicación web',
      description: 'Control de viáticos para agentes de servicio: registro de rutas, comprobación de gastos y autorizaciones con flujo agente → administrador. Reportes en tiempo real de montos otorgados contra comprobados.',
      tech: ['Laravel 10', 'Bootstrap 5', 'jQuery', 'MySQL'],
      image: '/img/projects/cauda_viaticos.png',
    },
    {
      name: 'Eco y Caos',
      type: 'Tienda en línea',
      description: 'Tienda de ropa deportiva con catálogo dinámico, carrito de compras y pagos seguros vía Mercado Pago. Panel administrativo para gestión de productos, órdenes e inventario.',
      tech: ['Laravel 10', 'Bootstrap 5', 'jQuery', 'MySQL'],
      image: '/img/projects/eco-caos.png',
    },
  ]


  function onImgError(e) {
    e.target.closest('[data-annex]')?.classList.add('hidden')
  }
</script>

<template>
  <section id="proyectos" class="border-t border-ink/10 bg-paper">
    <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">

      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 data-reveal class="type-display text-5xl text-ink sm:text-6xl">Proyectos</h2>
        <p data-reveal class="max-w-sm text-ink-soft">
          Algunos trabajos recientes: punto de venta, finanzas, viáticos y comercio en línea.
        </p>
      </div>

      <ol class="mt-14 border-t border-ink/20">
        <li v-for="(project, i) in projects" :key="project.name"
          class="group grid gap-8 border-b border-ink/10 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">

          <figure data-annex data-reveal-image
            :class="['overflow-hidden rounded-lg border border-ink/10 bg-white shadow-[0_1px_2px_rgb(21_32_29/0.06),0_16px_32px_-16px_rgb(21_32_29/0.28)] transition-shadow duration-500 group-hover:shadow-[0_2px_4px_rgb(21_32_29/0.08),0_24px_44px_-18px_rgb(21_32_29/0.36)] lg:col-span-7', i % 2 === 1 ? 'lg:order-2' : '']">
            <img :src="project.image" :alt="`Captura de ${project.name}`" loading="lazy"
              class="aspect-[16/9] w-full object-cover object-top-left transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              @error="onImgError" />
          </figure>

          <div data-reveal :class="['relative flex flex-col justify-center lg:col-span-5', i % 2 === 1 ? 'lg:order-1' : '']">
            <h3 class="type-display text-4xl text-ink sm:text-[2.75rem]">{{ project.name }}</h3>
            <p class="mt-2 font-medium text-accent">{{ project.type }}</p>

            <p class="mt-5 leading-relaxed text-ink-soft">{{ project.description }}</p>

            <p class="type-label mt-6">Tecnologías</p>
            <p class="mt-1.5 font-medium text-ink">{{ project.tech.join(' · ') }}</p>
          </div>
        </li>
      </ol>

    </div>
  </section>
</template>
