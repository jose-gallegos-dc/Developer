<script setup>
  const techGroups = [
    { label: 'Backend', items: ['PHP', 'Laravel'] },
    { label: 'Frontend', items: ['Vue.js', 'Inertia.js', 'Livewire', 'Tailwind CSS', 'JavaScript', 'HTML5'] },
    { label: 'Bases de datos', items: ['MySQL', 'MariaDB', 'PostgreSQL', 'SQL Server'] },
    { label: 'Despliegue', items: ['Nginx', 'Linux', 'Git', 'GitHub'] },
  ]
</script>

<template>
  <section id="perfil" class="border-t border-ink/10 bg-paper">
    <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">

      <h2 data-reveal class="type-display text-5xl text-ink sm:text-6xl">Perfil</h2>

      <div class="mt-12 grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-20">

        <div data-reveal class="max-w-[65ch] space-y-5 text-[1.075rem] leading-relaxed text-ink-soft">
          <p class="text-xl leading-relaxed text-ink">
            Soy desarrollador web con más de 4 años construyendo aplicaciones a medida.
            Mi especialidad es <strong class="font-semibold">PHP con Laravel</strong>,
            desde la versión 8 hasta la actual: backends limpios, APIs bien estructuradas
            y lógica de negocio que realmente escala.
          </p>
          <p>
            En el frontend trabajo con <strong class="font-semibold text-ink">Vue.js e Inertia.js</strong>
            para construir interfaces modernas sin perder la cohesión con el backend,
            y con <strong class="font-semibold text-ink">Tailwind CSS</strong> para que todo se vea bien
            sin reinventar estilos. Las bases de datos relacionales (MySQL, MariaDB o SQL Server)
            son parte central de cada proyecto que desarrollo.
          </p>
          <p>
            Cuando el código está listo, sé cómo llevarlo a producción: configuro servidores
            <strong class="font-semibold text-ink">Nginx</strong> en hosting compartido, VPS en DigitalOcean
            o incluso en hierro físico con Ubuntu Server. No me interesa acumular tecnologías;
            me interesa que <strong class="font-semibold text-ink">el proyecto funcione</strong> y
            le aporte valor real a quien lo usa.
          </p>
        </div>

        <div>
          <h3 data-reveal class="border-b border-ink/20 pb-3 text-lg font-semibold text-ink">Herramientas que uso a diario</h3>
          <dl>
            <div v-for="group in techGroups" :key="group.label" data-reveal class="grid gap-1 border-b border-ink/10 py-4 sm:grid-cols-[8.5rem_1fr] sm:gap-4">
              <dt class="type-label pt-0.5">{{ group.label }}</dt>
              <dd class="text-ink">{{ group.items.join(', ') }}</dd>
            </div>
          </dl>
        </div>

      </div>
    </div>
  </section>
</template>
