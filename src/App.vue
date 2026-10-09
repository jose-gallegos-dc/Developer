<script setup>
import AppNavbar from './components/layout/AppNavbar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import { useReveal } from './composables/useReveal'

useReveal()
</script>

<template>
  <div class="min-h-screen bg-paper text-ink">
    <AppNavbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  </div>
</template>
