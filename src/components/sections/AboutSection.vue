<script setup>
const stats = [
  { value: '5+', label: 'Años de experiencia' },
  { value: '20+', label: 'Proyectos completados' },
  { value: '100%', label: 'Compromiso' },
]

const skills = [
  { category: 'Backend',         items: ['PHP', 'Laravel', 'REST APIs'] },
  { category: 'Frontend',        items: ['Vue.js', 'Inertia.js', 'Tailwind CSS', 'JavaScript'] },
  { category: 'Bases de datos',  items: ['MySQL', 'MariaDB', 'SQL Server'] },
  { category: 'Infraestructura', items: ['Nginx', 'Linux', 'Deploy', 'SSL'] },
]
</script>

<template>
  <section id="sobre-mi" class="py-24 bg-slate-900/40">
    <div class="max-w-6xl mx-auto px-6">

      <p class="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">01. Sobre mí</p>
      <h2 class="text-4xl font-bold mb-16 tracking-tight">¿Quién soy?</h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <div class="space-y-6">
          <p class="text-slate-300 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, <strong class="text-white">consectetur adipiscing elit</strong>,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam.
          </p>
          <p class="text-slate-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p class="text-slate-400 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>

          <div class="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <p class="text-3xl font-bold text-cyan-400">{{ stat.value }}</p>
              <p class="text-slate-500 text-xs mt-1 font-mono">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="group in skills"
            :key="group.category"
            class="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-cyan-400/30 transition-colors duration-300"
          >
            <h3 class="text-white font-semibold mb-3 text-sm">{{ group.category }}</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="item in group.items"
                :key="item"
                class="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded font-mono"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
