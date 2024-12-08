<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import BackToTop from './components/BackToTop.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import { useTheme } from './composables/useTheme'

useTheme()
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <Sidebar />
    <div class="flex justify-end p-4">
      <ThemeToggle />
    </div>
    <main class="ml-64 p-8">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <BackToTop />
  </div>
</template>