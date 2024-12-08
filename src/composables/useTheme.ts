import { ref, watch } from 'vue'
import { usePreferredDark, useStorage } from '@vueuse/core'

export function useTheme() {
  const preferredDark = usePreferredDark()
  const theme = useStorage('theme', preferredDark.value ? 'dark' : 'light')
  const isDark = ref(theme.value === 'dark')

  watch(theme, (newTheme) => {
    isDark.value = newTheme === 'dark'
    document.documentElement.classList.toggle('dark', isDark.value)
  }, { immediate: true })

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  return {
    isDark,
    toggleTheme
  }
}