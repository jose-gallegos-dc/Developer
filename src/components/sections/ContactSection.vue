<script setup>
  import { ref } from 'vue'

  const form = ref({ nombre: '', email: '', mensaje: '' })
  const status = ref('idle') // idle | sending | success | error

  async function submit() {
    status.value = 'sending'
    try {
      const body = new URLSearchParams({
        'form-name': 'contacto',
        ...form.value,
      })
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (res.ok) {
        status.value = 'success'
        form.value = { nombre: '', email: '', mensaje: '' }
      } else {
        status.value = 'error'
      }
    } catch {
      status.value = 'error'
    }
  }
</script>

<template>
  <section id="contacto" class="py-24">
    <div class="max-w-6xl mx-auto px-6">

      <p class="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3 text-center">04. Contacto</p>
      <h2 class="text-4xl font-bold mb-4 tracking-tight text-center">Hablemos</h2>
      <p class="text-slate-400 mb-16 text-center mx-auto max-w-lg">
        ¿Tienes un proyecto en mente o quieres saber si puedo ayudarte?
        Escríbeme y te respondo en menos de 24 horas.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <!-- Info de contacto -->
        <div class="space-y-8">
          <p class="text-slate-300 leading-relaxed">
            Prefiero entender bien tu proyecto antes de hablar de costos o tiempos.
            Cuéntame qué quieres construir, cuál es el problema que resuelve y para cuándo lo necesitas —
            con eso ya puedo darte una idea clara de cómo podemos trabajarlo.
          </p>

          <div class="space-y-4">
            <a href="https://wa.me/521961249813?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20servicios%20%F0%9F%91%8B"
              target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 group">
              <span
                class="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center shrink-0 group-hover:border-green-400 transition-colors">
                <svg class="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <div>
                <p class="text-white text-sm font-medium group-hover:text-green-400 transition-colors">WhatsApp</p>
                <p class="text-slate-500 text-xs font-mono">+52 1 961 249 1813</p>
              </div>
            </a>

            <a href="https://github.com/jose-gallegos-dc" target="_blank" rel="noopener noreferrer"
              class="flex items-center gap-3 group">
              <span
                class="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 group-hover:border-cyan-400 transition-colors">
                <svg class="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </span>
              <div>
                <p class="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors">GitHub</p>
                <p class="text-slate-500 text-xs font-mono">jose-gallegos-dc</p>
              </div>
            </a>
          </div>
        </div>

        <!-- Formulario -->
        <div>
          <!-- Estado: éxito -->
          <div v-if="status === 'success'"
            class="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center space-y-3">
            <div class="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
              <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p class="text-white font-semibold">¡Mensaje enviado!</p>
            <p class="text-slate-400 text-sm">Te respondo en menos de 24 horas.</p>
            <button @click="status = 'idle'"
              class="text-cyan-400 text-sm underline underline-offset-2 hover:text-cyan-300 transition-colors">Enviar
              otro mensaje</button>
          </div>

          <!-- Formulario normal -->
          <form v-else name="contacto" @submit.prevent="submit" class="space-y-4">
            <input type="hidden" name="form-name" value="contacto" />
            <input type="hidden" name="bot-field" />

            <div>
              <label class="block text-xs text-slate-500 mb-1.5 font-mono uppercase tracking-wider">Nombre</label>
              <input v-model="form.nombre" name="nombre" type="text" placeholder="Tu nombre"
                class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                required />
            </div>

            <div>
              <label class="block text-xs text-slate-500 mb-1.5 font-mono uppercase tracking-wider">Correo
                electrónico</label>
              <input v-model="form.email" name="email" type="email" placeholder="tu@email.com"
                class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                required />
            </div>

            <div>
              <label class="block text-xs text-slate-500 mb-1.5 font-mono uppercase tracking-wider">Cuéntame tu
                proyecto</label>
              <textarea v-model="form.mensaje" name="mensaje" rows="5"
                placeholder="¿Qué quieres construir? ¿Cuál es el problema que resuelve?"
                class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                required></textarea>
            </div>

            <!-- Error -->
            <p v-if="status === 'error'" class="text-red-400 text-xs font-mono">
              Algo salió mal. Escríbeme directo por WhatsApp.
            </p>

            <button type="submit" :disabled="status === 'sending'"
              class="w-full bg-cyan-400 text-slate-950 font-semibold py-3 rounded-lg hover:bg-cyan-300 transition-colors duration-200 text-sm disabled:opacity-60 disabled:cursor-not-allowed">
              <span v-if="status === 'sending'">Enviando...</span>
              <span v-else>Enviar mensaje &rarr;</span>
            </button>
          </form>
        </div>

      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-slate-800">
      <p class="text-slate-600 text-xs text-center font-mono">
        &copy; 2026 &middot; José Gallegos &middot; Desarrollado con Vue + Vite
      </p>
    </div>
  </section>
</template>
