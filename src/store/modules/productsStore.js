const state = {
    displayVariantList: [
        {value: 'grid', name: 'Grid'},
        {value: 'list', name: 'List'},
    ],
    products: [],
    currentProduct: {},
    sortByList: [
        {value: 'id_asc', name: 'Sort by ID Ascending'},
        {value: 'id_desc', name: 'Sort by ID Descending'},
        {value: 'name_asc', name: 'Sort by Name Ascending'},
        {value: 'name_desc', name: 'Sort by Name Descending'},
    ],
    sortBy: 'id_desc',
    display: 'list'
}

const getters = {
    products: (state) => {
        return [...state.products].sort((a, b) => {
            let modifier = 1;

            if (state.sortBy.endsWith('_desc')) {
                modifier = -1;
            }

            const key = state.sortBy.split('_')[0];

            if (a[key] > b[key]) return modifier;
            if (a[key] < b[key]) return -1 * modifier;

            return 0;
        });
    },
    product: (state) => state.currentProduct,
    sortByList: (state) => state.sortByList,
    sortBy: (state) => state.sortBy,
    display: (state) => state.display,
    displayVariantList: (state) => state.displayVariantList,
}

const mutations = {
    SET_SORT_BY(state, sortBy) {
        state.sortBy = sortBy;
    },
    SET_DISPLAY(state, display) {
        state.display = display
    },
    SET_PRODUCTS(state, products) {
        state.products = products
    },
    SET_CURRENT_PRODUCT(state, currentProduct) {
        state.currentProduct = currentProduct
    }
}

const actions = {
    async fetchProducts({commit}) {
        const data = [
            {id: 1, name: 'One', slug: 'one', description: 'One description'},
            {id: 2, name: 'Two', slug: 'two', description: 'Two description'},
            {id: 3, name: 'Three', slug: 'three', description: 'Three description'},
            {id: 4, name: 'Four', slug: 'four', description: 'Four description'}
        ]

        commit("SET_PRODUCTS", data)
    },
    async findProduct({commit}, slug) {
        const data = state.products.find(item => item.slug === slug)
        commit("SET_CURRENT_PRODUCT", data)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
