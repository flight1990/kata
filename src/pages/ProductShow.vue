<script setup>

import {useStore} from "vuex";
import {computed, onMounted} from "vue";

const {slug} = defineProps(['slug'])

const store = useStore()
const product = computed(() => store.getters['productsStore/product'])

onMounted(() => store.dispatch("productsStore/findProduct", slug))

</script>

<template>
  <h2>{{ product.name }}</h2>

  <p v-html="product.description"></p>

  <router-link :to="{ name: 'products' }">Return back</router-link>
</template>

<style scoped>

</style>
