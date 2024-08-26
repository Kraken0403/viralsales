// filters.js
export const filterProducts = (products, selectedCategory) => {
    if (!selectedCategory) return products; // All products if no filter selected
  
    return products.filter(product => product.category === selectedCategory);
  };