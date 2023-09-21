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
      <li v-for="user in users" :key="user">
        {{ user.firstName }} {{ user.lastName }} Age: {{ user.age }}
      </li>
    </ul>
  </div>
</template>


