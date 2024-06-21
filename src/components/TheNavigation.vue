<script setup>

const {routes} = defineProps(['routes'])

</script>

<template>
  <nav>
    <ul>
      <li v-for="route in routes" :key="route.name">
        <router-link :to="{name: route.name}">{{ route.meta.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>