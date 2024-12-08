<script setup lang="ts">
import Education from '../components/resume/Education.vue'
import Projects from '../components/resume/Projects.vue'
import Internships from '../components/resume/Internships.vue'
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold text-primary-dark mb-8">简历</h1>
    
    <div class="space-y-8">
      <Education />
      <Internships />
      <Projects />
    </div>
  </div>
</template>