<template>
  <div>
    <ProductsTitle
      @filter="updateFilters"
    />
    <div v-if="filteredProducts.length > 0">
      <ProductsRow :productData="filteredProducts" />
    </div>
    <div v-else>
      No products found in this category or company.
    </div>
    <Footer />
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  data() {
    return {
      productData: [],
      selectedCategory: 'All',
      selectedCompany: 'All',
    };
  },

  computed: {
    filteredProducts() {
      return this.productData.filter((prod) => {
        const matchesCategory =
          this.selectedCategory === 'All' || prod.product_category === this.selectedCategory;
        const matchesCompany =
          this.selectedCompany === 'All' || prod.company === this.selectedCompany;

        return matchesCategory && matchesCompany;
      });
    },
  },

  methods: {
    // This method will handle both category and company updates
    updateFilters({ category, company }) {
      this.selectedCategory = category;
      this.selectedCompany = company;
    },
  },

  created() {
    const ProductsPageData = inject('productsPageData');
    const ProductData = ProductsPageData._rawValue;
    this.productData = ProductData.slices[0].items;
  },
};
</script>
