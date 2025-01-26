<template>
    <div class="products-title section">
      <div class="container-narrow">
        <div class="products-title-wrapper">
          <h1>Our Products</h1>
  
          <div class="dropdown-wrapper">
            <!-- Product Filter Dropdown -->
            <select @change="filterProducts" class="product-filter-dropdown">
              <option value="All" selected>All Types</option>
              <option value="Interior Paint">Interior Paint</option>
              <option value="Exterior Paint">Exterior Paint</option>
              <option value="Enamels">Enamels</option>
              <option value="Primers">Primers</option>
              <option value="Putty">Putty</option>
              <option value="Protective Textures">Protective Textures</option>
            </select>
  
            <!-- Company Filter Dropdown -->
            <select @change="filterCompanies" class="company-filter-dropdown">
              <option value="All" selected>All Companies</option>
              <option value="Jotun">Jotun</option>
              <option value="Ultra Italia">Ultra Italia</option>
              <option value="Jubilant">Jubilant</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedCategory: 'All',
        selectedCompany: 'All',
      };
    },
    methods: {
      // Handle product category filter
      filterProducts(e) {
        this.selectedCategory = e.target.value;
        this.emitFilters();
      },
      // Handle company filter
      filterCompanies(e) {
        this.selectedCompany = e.target.value;
        this.emitFilters();
      },
      // Emit both filters as a combined object
      emitFilters() {
        this.$emit('filter', {
          category: this.selectedCategory,
          company: this.selectedCompany,
        });

        console.log(this.selectedCategory, this.selectedCompany)
      },
    },
  };
  </script>
  
  <style src="./ProductsTitle.scss" scoped></style>
  