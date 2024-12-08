<script setup lang="ts">
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

interface Message {
  id: number
  author: string
  content: string
  timestamp: string
}

const messages = useLocalStorage<Message[]>('message-board', [])
const newMessage = ref('')
const author = ref('')
const MAX_MESSAGES = 20

const addMessage = () => {
  if (!newMessage.value.trim() || !author.value.trim()) return
  
  const message: Message = {
    id: Date.now(),
    author: author.value,
    content: newMessage.value,
    timestamp: new Date().toLocaleString()
  }
  
  messages.value = [message, ...messages.value.slice(0, MAX_MESSAGES - 1)]
  newMessage.value = ''
}
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-lg shadow-md p-8">
      <h1 class="text-3xl font-bold text-primary-dark mb-8">Message Board</h1>
      
      <form @submit.prevent="addMessage" class="mb-8">
        <div class="mb-4">
          <label for="author" class="block text-gray-700 mb-2">Your Name</label>
          <input
            id="author"
            v-model="author"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            required
          >
        </div>
        
        <div class="mb-4">
          <label for="message" class="block text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            v-model="newMessage"
            rows="3"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
        >
          留言
        </button>
      </form>
      
      <div class="space-y-4">
        <div
          v-for="message in messages"
          :key="message.id"
          class="border-b border-gray-200 last:border-0 pb-4 last:pb-0"
        >
          <div class="flex justify-between items-start mb-2">
            <span class="font-semibold text-gray-800">{{ message.author }}</span>
            <time class="text-sm text-gray-500">{{ message.timestamp }}</time>
          </div>
          <p class="text-gray-700">{{ message.content }}</p>
        </div>
        
        <p v-if="messages.length === 0" class="text-gray-500 text-center py-4">
          此处还没有留言，成为第一个留言的人吧。
        </p>
      </div>
    </div>
  </div>
</template>