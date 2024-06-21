<script setup>

import {useStore} from "vuex";
import {computed} from "vue";

const {product} = defineProps(['product'])

const store = useStore()
const display = computed(() => store.getters["productsStore/display"])

</script>

<template>
  <li v-if="display === 'list'">
    <router-link :to="{ name: 'product_show', params: {slug: product.slug} }">
      {{ product.name }}
    </router-link>
  </li>

  <div v-else>
    <h4>{{ product.name }}</h4>
    <p>{{ product.description }}</p>

    <router-link :to="{ name: 'product_show', params: {slug: product.slug} }">
      Read
    </router-link>
  </div>
</template>

<style scoped>

</style>