<template>
  <div class="min-h-screen bg-background text-foreground">
    <div class="container mx-auto px-6 py-20">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mb-8 text-balance">Get In Touch</h1>
        <p class="text-xl text-muted-foreground mb-12 max-w-2xl">
          I'm always interested in new opportunities and collaborations. 
          Let's discuss how we can work together.
        </p>

        <div class="grid md:grid-cols-2 gap-12">
          <div class="space-y-8">
            <div>
              <h3 class="text-xl font-semibold mb-6">Contact Information</h3>
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <div class="w-5 h-5 text-primary">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <span>youssefghazzar15@gmail.com</span>
                </div>
                
                
                
                <div class="flex items-center gap-3">                   
                  <span>+112 767-135293</span>
                </div>
              </div>
            </div>

            <div>
            <div>
  <h3 class="text-xl font-semibold mb-6">Follow Me</h3>
  <div class="flex gap-4">
    <!-- LinkedIn -->
    <a href="https://www.linkedin.com/in/youssef-ghazzar-92263a316/" 
       class="w-10 h-10 bg-muted rounded-full flex items-center justify-center 
              hover:bg-primary hover:text-primary-foreground transition-colors"
       target="_blank" rel="noopener noreferrer">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    </a>

    <!-- GitHub -->
    <a href="https://github.com/YoussefGhazzar" 
       class="w-10 h-10 bg-muted rounded-full flex items-center justify-center 
              hover:bg-primary hover:text-primary-foreground transition-colors"
       target="_blank" rel="noopener noreferrer">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>
  </div>
</div>

            </div>
          </div>

          <div>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium mb-2">Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium mb-2">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium mb-2">Subject</label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  required
                  class="w-full px-3 py-2 bg-background border border-border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
  <label for="message" class="block text-sm font-medium mb-2">
    Message
  </label>
  <textarea
    id="message"
    v-model="form.message"
    required
    rows="5"
    placeholder="Tell me about your project..."
    class="w-full px-3 py-2 bg-background border border-border rounded-md 
           focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent 
           resize-none transition-colors text-black"
  ></textarea>
</div>

              
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    
    alert('Message sent successfully!')
  } catch (error) {
    alert('Failed to send message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>