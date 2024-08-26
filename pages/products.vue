
<template>
    <div>
        <ProductsTitle @filter="updateSelectedCategory"/>
        <div v-if="filteredProducts.length > 0">
        <ProductsRow :productData="filteredProducts" />
        </div>
        <div v-else>
        No products found in this category.
        </div>
        <Footer />
    </div>
</template>
<script>

import { inject } from 'vue';
// import { onMounted } from 'vue';
    
export default {
    
    data() {
        return {
            productData: [],
            selectedCategory: 'All'
        }
    },

    computed: {
        filteredProducts() {
            if(this.selectedCategory === 'All') {
                return this.productData;
            }
            else {
                return this.productData.filter((prod) => {
                return prod.product_category === this.selectedCategory;
            });
            }
        }
    },

    methods: {
        updateSelectedCategory(newCategory) {
            this.selectedCategory = newCategory;
            console.log(newCategory)
        }
    },

    created(){
        const ProductsPageData = inject('productsPageData');
        const ProductData = ProductsPageData._rawValue;
        this.productData = ProductData.slices[0].items;
        console.log(this.productData)
    },
}

</script>


