<script setup>
  import { Icon } from '@iconify/vue'

  const stats = [
    { value: '4+', label: 'Años de experiencia' },
    { value: '12', label: 'Proyectos entregados' },
    { value: 'v8→v11', label: 'Laravel dominado' },
  ]

  const techGroups = [
    {
      label: 'Backend',
      items: [
        { name: 'PHP', icon: 'logos:php' },
        { name: 'Laravel', icon: 'logos:laravel' },
      ],
    },
    {
      label: 'Frontend',
      items: [
        { name: 'Vue.js', icon: 'logos:vue' },
        { name: 'Inertia.js', icon: 'logos:inertia' },
        { name: 'Livewire', icon: 'logos:livewire' },
        { name: 'Tailwind', icon: 'logos:tailwindcss' },
        { name: 'JavaScript', icon: 'logos:javascript' },
        { name: 'HTML5', icon: 'logos:html-5' },
      ],
    },
    {
      label: 'Bases de datos',
      items: [
        { name: 'MySQL', icon: 'logos:mysql' },
        { name: 'MariaDB', icon: 'logos:mariadb' },
        { name: 'PostgreSQL', icon: 'logos:postgresql' },
        { name: 'SQL Server', icon: 'simple-icons:microsoftsqlserver' },
      ],
    },
    {
      label: 'Despliegue',
      items: [
        { name: 'Nginx', icon: 'logos:nginx' },
        { name: 'Linux', icon: 'logos:linux-tux' },
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'GitHub', icon: 'mdi:github' },
      ],
    },
  ]
</script>

<template>
  <section id="sobre-mi" class="py-24 bg-slate-900/40">
    <div class="max-w-6xl mx-auto px-6">

      <p class="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3 text-center">01. Sobre mí</p>
      <h2 class="text-4xl font-bold mb-16 tracking-tight text-center">¿Quién soy?</h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <!-- Bio + stats -->
        <div class="space-y-5">
          <p class="text-slate-300 text-lg leading-relaxed">
            Soy desarrollador web con más de 4 años construyendo aplicaciones a medida.
            Mi especialidad es <strong class="text-white">PHP con Laravel</strong> —
            desde la versión 8 hasta la actual — diseñando backends limpios, APIs bien estructuradas
            y lógica de negocio que realmente escala.
          </p>
          <p class="text-slate-400 leading-relaxed">
            En el frontend trabajo con <strong class="text-slate-300">Vue.js e Inertia.js</strong>
            para construir interfaces modernas sin perder la cohesión con el backend,
            y con <strong class="text-slate-300">Tailwind CSS</strong> para que todo se vea bien
            sin reinventar estilos. Las bases de datos relacionales —
            MySQL, MariaDB o SQL Server — son parte central de cada proyecto que desarrollo.
          </p>
          <p class="text-slate-400 leading-relaxed">
            Cuando el código está listo, sé cómo llevarlo a producción: configuro servidores
            <strong class="text-slate-300">Nginx</strong> en hosting compartido, VPS en DigitalOcean
            o incluso en hierro físico con Ubuntu Server. No me interesa acumular tecnologías —
            me interesa que <strong class="text-slate-300">tu proyecto funcione</strong> y
            le aporte valor real a quien lo usa.
          </p>

          <div class="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <p class="text-2xl font-bold text-cyan-400 font-mono">{{ stat.value }}</p>
              <p class="text-slate-500 text-xs mt-1">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <!-- Tech icon grid -->
        <div class="space-y-6">
          <div v-for="group in techGroups" :key="group.label">
            <p class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">{{ group.label }}</p>
            <div class="flex flex-wrap gap-3">
              <div v-for="tech in group.items" :key="tech.name"
                class="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 hover:border-slate-600 transition-colors duration-200">
                <Icon :icon="tech.icon" class="w-5 h-5 shrink-0" />
                <span class="text-slate-300 text-sm font-mono">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
