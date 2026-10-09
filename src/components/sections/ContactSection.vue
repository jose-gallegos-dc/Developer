<script setup>
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue'
  import { email, whatsapp, github } from '../../data/contact'

  const form = ref({ nombre: '', email: '', mensaje: '' })
  const status = ref('idle')

  async function submit() {
    status.value = 'sending'
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: 'Nuevo contacto desde el portfolio',
          from_name: 'Portfolio José Gallegos',
          ...form.value,
        }).toString(),
      })
      const json = await res.json()
      if (json.success) {
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
    { label: 'Correo', value: email, href: `mailto:${email}` },
    { label: 'WhatsApp', value: whatsapp.display, href: whatsapp.href, external: true },
    { label: 'GitHub', value: github.display, href: github.href, external: true },
  ]

  const fieldClass = 'w-full rounded-md border border-ink/20 bg-white px-4 py-3 text-ink placeholder:text-ink-soft/80 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20'
</script>

<template>
  <section id="contacto" class="border-t border-ink/10 bg-paper">
    <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">

      <div class="grid gap-14 lg:grid-cols-12 lg:gap-16">

        <div class="lg:col-span-5">
          <h2 data-reveal class="type-display text-5xl text-ink sm:text-6xl">Hablemos</h2>
          <p data-reveal class="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            ¿Tienes una vacante, un proyecto en mente o quieres saber si puedo ayudarte?
            Escríbeme y te respondo en menos de 24 horas.
          </p>

          <dl class="mt-10 border-t border-ink/20">
            <div v-for="contact in contacts" :key="contact.label" data-reveal
              class="grid gap-0.5 border-b border-ink/10 py-4 sm:grid-cols-[6.5rem_1fr] sm:items-baseline sm:gap-4">
              <dt class="type-label">{{ contact.label }}</dt>
              <dd class="min-w-0">
                <a :href="contact.href" :target="contact.external ? '_blank' : undefined"
                  :rel="contact.external ? 'noopener noreferrer' : undefined"
                  class="break-words font-medium text-accent underline decoration-accent/30 hover:decoration-accent">
                  {{ contact.value }}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div class="lg:col-span-7">
          <div data-reveal class="rounded-xl bg-mist p-6 sm:p-10">

            <Transition name="swap" mode="out-in">
            <div v-if="status === 'success'" class="relative py-16 text-center" role="status">
              <span class="check-pop mx-auto flex size-12 items-center justify-center rounded-full bg-accent text-paper">
                <Icon icon="heroicons:check" class="size-6" />
              </span>
              <p class="mt-6 text-lg font-semibold text-ink">Tu mensaje llegó a mi bandeja.</p>
              <p class="mt-1 text-ink-soft">Te respondo en menos de 24 horas.</p>
              <button type="button" class="mt-6 font-semibold text-accent underline decoration-accent/30 hover:decoration-accent"
                @click="status = 'idle'">
                Escribir otro mensaje
              </button>
            </div>

            <form v-else class="space-y-6" @submit.prevent="submit">

              <div class="grid gap-6 sm:grid-cols-2">
                <div>
                  <label for="nombre" class="mb-2 block text-sm font-semibold text-ink">Nombre</label>
                  <input id="nombre" v-model="form.nombre" name="nombre" type="text" autocomplete="name"
                    placeholder="Tu nombre" :class="fieldClass" required />
                </div>
                <div>
                  <label for="email" class="mb-2 block text-sm font-semibold text-ink">Correo electrónico</label>
                  <input id="email" v-model="form.email" name="email" type="email" autocomplete="email"
                    placeholder="tu@empresa.com" :class="fieldClass" required />
                </div>
              </div>

              <div>
                <label for="mensaje" class="mb-2 block text-sm font-semibold text-ink">Mensaje</label>
                <textarea id="mensaje" v-model="form.mensaje" name="mensaje" rows="5"
                  placeholder="Cuéntame sobre la vacante o el proyecto"
                  :class="[fieldClass, 'resize-y']" required></textarea>
              </div>

              <p v-if="status === 'error'" class="flex items-start gap-2 text-sm font-medium text-red-700" role="alert">
                <Icon icon="heroicons:exclamation-triangle" class="mt-0.5 size-4 shrink-0" />
                <span>
                  No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme a
                  <a :href="`mailto:${email}`" class="underline">{{ email }}</a>.
                </span>
              </p>

              <div class="flex flex-wrap items-center justify-between gap-4 pt-2">
                <p class="text-sm text-ink-soft">Todos los campos son obligatorios.</p>
                <button type="submit" :disabled="status === 'sending'"
                  class="inline-flex cursor-pointer btn-primary items-center gap-2 rounded-md bg-accent hover:bg-accent-dark px-7 py-3.5 font-semibold text-paper disabled:cursor-wait disabled:opacity-70">
                  <Icon v-if="status === 'sending'" icon="heroicons:arrow-path" class="size-4 animate-spin" />
                  {{ status === 'sending' ? 'Enviando…' : 'Enviar mensaje' }}
                </button>
              </div>
            </form>
            </Transition>
          </div>
        </div>

      </div>
    </div>

    <footer class="mx-auto max-w-6xl border-t border-ink/10 px-4 py-6 sm:px-6">
      <p class="text-xs text-ink-soft">&copy; 2026 José Gallegos · Hecho con Vue y Vite</p>
    </footer>
  </section>
</template>
