<template>
  <nav class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
          Youssef Ghazzar
        </router-link>

        <!-- Desktop menu -->
        <div class="hidden md:flex ml-10 items-center space-x-8">
          <router-link 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.scrollTo ? '#' : item.href"
            @click.prevent="handleClick(item)"
            class="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-white"
            :class="{ 'border-white text-primary': activeSection === item.href }"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-primary/10 transition-colors">
          <span v-if="!mobileMenuOpen">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </span>
          <span v-else>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </span>
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-2">
        <div class="px-2 pt-2 pb-3 space-y-1 border-t border-border">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.scrollTo ? '#' : item.href"
            @click.prevent="handleClick(item)"
            class="block text-muted-foreground hover:text-primary px-3 py-2 text-base font-medium transition-colors border-b-2 border-transparent hover:border-white"
            :class="{ 'border-white text-primary': activeSection === item.href }"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const mobileMenuOpen = ref(false)
const router = useRouter()
const route = useRoute()

const activeSection = ref(route.path === '/' ? 'home' : route.path)

const navigation = [
  { name: 'Home', href: 'home', scrollTo: true },
  { name: 'About', href: 'about', scrollTo: true },
  { name: 'Projects', href: 'projects', scrollTo: true },
  { name: 'Contact', href: 'contact', scrollTo: true }
]

const handleClick = (item) => {
  mobileMenuOpen.value = false

  if (item.scrollTo) {
    if (route.path !== '/') {
      router.push('/').then(() => {
        setTimeout(() => {
          const target = document.getElementById(item.href)
          if (target) target.scrollIntoView({ behavior: 'smooth' })
          activeSection.value = item.href
        }, 100)
      })
    } else {
      const target = document.getElementById(item.href)
      if (target) target.scrollIntoView({ behavior: 'smooth' })
      activeSection.value = item.href
    }
  } else {
    router.push(item.href)
    activeSection.value = item.href
  }
}

const updateActiveSection = () => {
  const sections = ['home', 'about', 'projects', 'contact']
  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = section
        break
      }
    }
  }
}

watch(() => route.path, (newPath) => {
  activeSection.value = newPath === '/' ? 'home' : newPath
})

onMounted(() => {
  if (route.path === '/') window.addEventListener('scroll', updateActiveSection)
})
onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>
