<script setup lang="ts">
const projects = [
  {
    title: "E-commerce Platform",
    description: "Developed a full-stack e-commerce platform using Vue.js and Node.js",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Docker"],
    highlights: [
      "Implemented secure payment processing",
      "Designed responsive UI with Tailwind CSS",
      "Integrated real-time inventory management"
    ]
  },
  {
    title: "Machine Learning Research Project",
    description: "Conducted research on image classification algorithms",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    highlights: [
      "Achieved 95% accuracy in classification",
      "Published findings in university journal",
      "Presented at student research symposium"
    ]
  }
]
</script>

<template>
  <section class="mb-8">
    <h2 class="text-2xl font-bold text-primary-dark mb-4">Projects</h2>
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