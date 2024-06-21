import { createStore } from 'vuex'
import productsStore from "./modules/productsStore.js"

const store = createStore({
    modules: {
        productsStore
    }
});

export default store