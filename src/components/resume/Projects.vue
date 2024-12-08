<script setup lang="ts">
const projects = [
  {
    title: "编",
    description: "编",
    technologies: ["Vue.js", "Node.js", "Docker"],
    highlights: [
      "编",
      "编",
      "编"
    ]
  },
  {
    title: "编",
    description: "编",
    technologies: ["Python", "Pytorch", "OpenCV"],
    highlights: [
      "编",
      "编",
      "编"
    ]
  }
]
</script>

<template>
  <section class="mb-8">
    <h2 class="text-2xl font-bold text-primary-dark mb-4">项目经历</h2>
    <div class="space-y-4">
      <div 
        v-for="project in projects" 
        :key="project.title"
        class="bg-white rounded-lg p-6 shadow-sm"
      >
        <h3 class="text-xl font-semibold">{{ project.title }}</h3>
        <p class="text-gray-600 mt-2">{{ project.description }}</p>
        
        <div class="mt-3 flex flex-wrap gap-2">
          <span 
            v-for="tech in project.technologies" 
            :key="tech"
            class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {{ tech }}
          </span>
        </div>
        
        <ul class="mt-4 list-disc list-inside text-gray-600 space-y-1">
          <li v-for="highlight in project.highlights" :key="highlight">
            {{ highlight }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>