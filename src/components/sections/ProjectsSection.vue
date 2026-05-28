<script setup>
const projects = [
  {
    name: 'Lorem Ipsum Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    tech: ['Laravel', 'Vue.js', 'MySQL'],
    type: 'Web App',
  },
  {
    name: 'Dolor Sit Platform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    tech: ['PHP', 'JavaScript', 'MariaDB'],
    type: 'E-commerce',
  },
  {
    name: 'Consectetur Dashboard',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    tech: ['Laravel', 'Inertia', 'Tailwind'],
    type: 'Dashboard',
  },
  {
    name: 'Adipiscing REST API',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    tech: ['Laravel', 'MySQL', 'Nginx'],
    type: 'API REST',
  },
]
</script>

<template>
  <section id="proyectos" class="py-24">
    <div class="max-w-6xl mx-auto px-6">

      <p class="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">02. Proyectos</p>
      <div class="flex items-end justify-between mb-16">
        <h2 class="text-4xl font-bold tracking-tight">Clientes &amp; proyectos</h2>
        <p class="text-slate-500 text-sm hidden sm:block font-mono">algunos trabajos recientes</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="project in projects"
          :key="project.name"
          class="group bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        >
          <div class="flex items-start justify-between mb-4">
            <span class="text-xs text-slate-500 font-mono border border-slate-700 px-2 py-1 rounded">
              {{ project.type }}
            </span>
            <svg class="w-4 h-4 text-slate-700 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </div>

          <h3 class="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
            {{ project.name }}
          </h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-4">{{ project.description }}</p>

          <div class="flex flex-wrap gap-3">
            <span
              v-for="tech in project.tech"
              :key="tech"
              class="text-xs text-slate-500 font-mono"
            >{{ tech }}</span>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>
