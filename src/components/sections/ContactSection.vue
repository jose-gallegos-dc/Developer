<script setup>
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue'

  const form = ref({ nombre: '', email: '', mensaje: '' })
  const status = ref('idle')

  async function submit() {
    status.value = 'sending'
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contacto', ...form.value }).toString(),
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

  const contacts = [
    {
      label: 'WhatsApp',
      value: '+52 1 961 249 1813',
      href: 'https://wa.me/521961249813?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20servicios%20%F0%9F%91%8B',
      icon: 'ri:whatsapp-fill',
      iconColor: 'text-green-400',
      ringColor: 'border-green-500/30 bg-green-500/10 group-hover:border-green-400',
      textHover: 'group-hover:text-green-400',
    },
    {
      label: 'Correo electrónico',
      value: 'jose.gallegos.delcarpio@gmail.com',
      href: 'mailto:jose.gallegos.delcarpio@gmail.com',
      icon: 'heroicons:envelope',
      iconColor: 'text-cyan-400',
      ringColor: 'border-slate-700 bg-slate-800 group-hover:border-cyan-400',
      textHover: 'group-hover:text-cyan-400',
    },
    {
      label: 'GitHub',
      value: 'jose-gallegos-dc',
      href: 'https://github.com/jose-gallegos-dc',
      icon: 'mdi:github',
      iconColor: 'text-slate-400',
      ringColor: 'border-slate-700 bg-slate-800 group-hover:border-cyan-400',
      textHover: 'group-hover:text-cyan-400',
    },
  ]
</script>

<template>
  <section id="contacto" class="py-24">
    <div class="max-w-6xl mx-auto px-6">

      <p class="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3 text-center" data-aos="fade-up">
        04. Contacto
      </p>
      <h2 class="text-4xl font-bold mb-4 tracking-tight text-center" data-aos="fade-up" data-aos-delay="50">
        Hablemos
      </h2>
      <p class="text-slate-400 mb-16 text-center mx-auto max-w-lg" data-aos="fade-up" data-aos-delay="100">
        ¿Tienes un proyecto en mente o quieres saber si puedo ayudarte?
        Escríbeme y te respondo en menos de 24 horas.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <!-- Info -->
        <div class="space-y-8" data-aos="fade-right">
          <p class="text-slate-300 leading-relaxed">
            Prefiero entender bien tu proyecto antes de hablar de costos o tiempos.
            Cuéntame qué quieres construir, cuál es el problema que resuelve y para cuándo lo necesitas —
            con eso ya puedo darte una idea clara de cómo podemos trabajarlo.
          </p>

          <div class="space-y-4">
            <a v-for="contact in contacts" :key="contact.label" :href="contact.href" target="_blank"
              rel="noopener noreferrer" class="flex items-center gap-3 group">
              <span
                :class="['w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 transition-colors', contact.ringColor]">
                <Icon :icon="contact.icon" :class="['w-5 h-5', contact.iconColor]" />
              </span>
              <div>
                <p :class="['text-white text-sm font-medium transition-colors', contact.textHover]">
                  {{ contact.label }}
                </p>
                <p class="text-slate-500 text-xs font-mono">{{ contact.value }}</p>
              </div>
            </a>
          </div>
        </div>

        <!-- Formulario -->
        <div data-aos="fade-left">
          <div v-if="status === 'success'"
            class="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center space-y-3">
            <div class="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
              <Icon icon="heroicons:check" class="w-6 h-6 text-green-400" />
            </div>
            <p class="text-white font-semibold">¡Mensaje enviado!</p>
            <p class="text-slate-400 text-sm">Te respondo en menos de 24 horas.</p>
            <button @click="status = 'idle'"
              class="text-cyan-400 text-sm underline underline-offset-2 hover:text-cyan-300 transition-colors">
              Enviar otro mensaje
            </button>
          </div>

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
              <label class="block text-xs text-slate-500 mb-1.5 font-mono uppercase tracking-wider">
                Cuéntame tu proyecto
              </label>
              <textarea v-model="form.mensaje" name="mensaje" rows="5"
                placeholder="¿Qué quieres construir? ¿Cuál es el problema que resuelve?"
                class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                required></textarea>
            </div>

            <p v-if="status === 'error'" class="text-red-400 text-xs font-mono flex items-center gap-2">
              <Icon icon="heroicons:exclamation-triangle" class="w-4 h-4 shrink-0" />
              Algo salió mal. Escríbeme directo por WhatsApp.
            </p>

            <button type="submit" :disabled="status === 'sending'"
              class="w-full inline-flex items-center justify-center cursor-pointer gap-2 bg-cyan-400 text-slate-950 font-semibold py-3 rounded-lg hover:bg-cyan-300 transition-colors duration-200 text-sm disabled:opacity-60 disabled:cursor-not-allowed">
              <Icon v-if="status === 'sending'" icon="heroicons:arrow-path" class="w-4 h-4 animate-spin" />
              <Icon v-else icon="heroicons:paper-airplane" class="w-4 h-4" />
              <span>{{ status === 'sending' ? 'Enviando...' : 'Enviar mensaje' }}</span>
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
