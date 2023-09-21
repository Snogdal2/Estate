import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useUserStore = defineStore("user", {
    state: () => ({
        users: [],
    }),
    actions: {
      async fetchUsers() {
        try {
          const data = await axios.get('http://localhost:3000')
            this.users = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})

