<script setup>

import {useStore} from "vuex";

import ProductListItem from "@/components/ProductListItem.vue";
import {computed} from "vue";

const {products} = defineProps(['products'])

const store = useStore()
const sortBy = computed(() => store.getters["productsStore/sortBy"])
const sortByList = computed(() => store.getters["productsStore/sortByList"])
const display = computed(() => store.getters["productsStore/display"])
const displayVariantList = computed(() => store.getters["productsStore/displayVariantList"])

const onSortChange = (event) => {
  store.commit("productsStore/SET_SORT_BY", event.target.value)
}

const onDisplayChange = (event) => {
  store.commit("productsStore/SET_DISPLAY", event.target.value)
}

</script>

<template>
  <div>
    <select
        :value="display"
        @change="onDisplayChange"
    >
      <option
          v-for="displayVariant in displayVariantList"
          :key="displayVariant.value"
          :value="displayVariant.value"
      >
        {{ displayVariant.name }}
      </option>
    </select>

    <select
        :value="sortBy"
        @change="onSortChange"
    >
      <option
          v-for="sortByListItem in sortByList"
          :key="sortByListItem.value"
          :value="sortByListItem.value"
      >
        {{ sortByListItem.name }}
      </option>
    </select>

    <ul v-if="display === 'list'">
      <ProductListItem
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </ul>

    <ProductListItem
        v-else
        v-for="product in products"
        :key="product.id"
        :product="product"
    />
  </div>
</template>

<style scoped>

</style>
