<script setup>
import {onMounted, computed } from "vue";
import { useUserStore } from "../stores/counter";
const store = useUserStore();
const users = computed(() => {
  return store.users;
});
onMounted(() => {
  store.fetchUsers();
});
</script>


<template>
  <div>
    <ul>
      <li v-for="users in users" :key="users">
        {{ users.firstName }}
      </li>
    </ul>
  </div>
</template>


