<script setup>
  import { Icon } from '@iconify/vue'

  const projects = [
    {
      name: 'Unifam',
      type: 'Sistema POS',
      description: 'POS multisucursal con precios diferenciados por unidad, control de inventario completo — entradas, salidas, transferencias y resurtido — más facturación electrónica 4.0 integrada y validada con el SAT.',
      tech: [
        { name: 'Laravel 12', icon: 'logos:laravel' },
        { name: 'Vue 3', icon: 'logos:vue' },
        { name: 'Tailwind', icon: 'logos:tailwindcss' },
        { name: 'MariaDB', icon: 'logos:mariadb' },
      ],
      image: '/img/projects/unifam.png',
      placeholder: 'from-indigo-950 to-slate-800',
    },
    {
      name: 'Modii',
      type: 'SaaS Platform',
      description: 'Plataforma centralizada para gestión de clientes, proveedores y wallets. Procesa pagos, cobros y movimientos financieros en tiempo real con una interfaz reactiva y sin recargas.',
      tech: [
        { name: 'Laravel 12', icon: 'logos:laravel' },
        { name: 'Livewire 4', icon: 'logos:livewire' },
        { name: 'Tailwind', icon: 'logos:tailwindcss' },
      ],
      image: '/img/projects/modii.png',
      placeholder: 'from-cyan-950 to-slate-800',
    },
    {
      name: 'Viáticos Cauda',
      type: 'Web App',
      description: 'Control de viáticos para agentes de servicio: registro de rutas, comprobación de gastos y autorizaciones con flujo agente → administrador. Reportes en tiempo real para supervisión precisa de montos otorgados vs. comprobados.',
      tech: [
        { name: 'Laravel 10', icon: 'logos:laravel' },
        { name: 'Bootstrap 5', icon: 'logos:bootstrap' },
        { name: 'jQuery', icon: 'logos:jquery' },
        { name: 'MySQL', icon: 'logos:mysql' },
      ],
      image: '/img/projects/viaticos.png',
      placeholder: 'from-emerald-950 to-slate-800',
    },
    {
      name: 'Eco y Caos',
      type: 'E-commerce',
      description: 'Tienda en línea de ropa deportiva con catálogo dinámico, carrito de compras y pagos seguros vía Mercado Pago. Panel administrativo completo para gestión de productos, órdenes e inventario.',
      tech: [
        { name: 'Laravel 10', icon: 'logos:laravel' },
        { name: 'Bootstrap 5', icon: 'logos:bootstrap' },
        { name: 'jQuery', icon: 'logos:jquery' },
        { name: 'MySQL', icon: 'logos:mysql' },
      ],
      image: '/img/projects/eco-caos.png',
      placeholder: 'from-orange-950 to-slate-800',
    },
  ]

  function onImgError(e) {
    e.target.style.display = 'none'
    e.target.nextElementSibling.style.display = 'flex'
  }
</script>

<template>
  <section id="proyectos" class="py-12">
    <div class="max-w-6xl mx-auto px-6">

      <p class="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3 text-center">02. Proyectos</p>
      <div class="flex flex-col items-center gap-3 mb-8">
        <h2 class="text-4xl font-bold tracking-tight text-center">Clientes &amp; proyectos</h2>
        <span class="inline-flex items-center gap-1.5 text-xs text-slate-400 border border-slate-700 bg-slate-900 px-4 py-1.5 rounded-full font-mono">
          <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          Algunos trabajos recientes
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <article v-for="(project, i) in projects" :key="project.name"
          class="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:-translate-y-1"
          data-aos="fade-up" :data-aos-delay="i * 80">

          <!-- Imagen del proyecto -->
          <div class="relative bg-slate-800 overflow-hidden" style="height: 160px;">
            <img :src="project.image" :alt="project.name"
              class="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
              @error="onImgError" />
            <!-- Placeholder si no hay imagen -->
            <div
              :class="['bg-gradient-to-br', project.placeholder, 'absolute inset-0 hidden items-center justify-center']">
              <span class="text-3xl font-extrabold text-white/10 select-none tracking-tight">
                {{ project.name }}
              </span>
            </div>
            <!-- Gradiente inferior para suavizar el corte con el contenido -->
            <div class="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
            <!-- Badge de tipo superpuesto -->
            <span
              class="absolute top-3 left-3 text-xs font-mono text-slate-300 bg-slate-950/80 backdrop-blur-sm border border-slate-700 px-2.5 py-1 rounded-full">
              {{ project.type }}
            </span>
          </div>

          <!-- Contenido -->
          <div class="p-4">
            <!-- Tech badges -->
            <div class="flex flex-wrap gap-1.5 mb-3">
              <span v-for="tech in project.tech" :key="tech.name"
                class="inline-flex items-center gap-1.5 text-xs text-slate-300 border border-slate-700 rounded-full px-2.5 py-0.5 font-mono">
                <Icon :icon="tech.icon" class="w-3.5 h-3.5 shrink-0" />
                {{ tech.name }}
              </span>
            </div>

            <h3 class="text-white font-bold text-lg mb-1.5 group-hover:text-cyan-400 transition-colors duration-200">
              {{ project.name }}
            </h3>
            <p class="text-slate-400 text-sm leading-relaxed line-clamp-2">
              {{ project.description }}
            </p>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>
