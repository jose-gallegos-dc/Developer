<script setup>
import AppNavbar from './components/layout/AppNavbar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <div class="bg-slate-950 text-slate-100 min-h-screen">
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
