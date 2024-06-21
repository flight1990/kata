<script setup>

import {useStore} from "vuex";
import {computed, onMounted} from "vue";

import ProductsList from "@/components/ProductsList.vue";

const store = useStore()
const products = computed(() => store.getters["productsStore/products"])

onMounted(() => store.dispatch("productsStore/fetchProducts"))

</script>

<template>
  <ProductsList
      :products="products"
  />
</template>

<style scoped>

</style>