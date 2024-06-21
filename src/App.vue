<script setup>

import TheNavigation from "@/components/TheNavigation.vue";
import router from "@/router/index.js";
import {computed} from "vue";
import {routes} from "@/router/routes.js";

const pageTitle = computed(() => router.currentRoute.value.meta.title)
const filteredRoutes = computed(() => routes.filter(route => route.meta && route.meta.showInNavigation))

</script>

<template>
  <main>
    <TheNavigation
        :routes="filteredRoutes"
    />

    <h2 v-if="pageTitle">{{ pageTitle }}</h2>

    <div>
      <router-view></router-view>
    </div>
  </main>
</template>