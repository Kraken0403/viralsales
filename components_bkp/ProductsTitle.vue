<template>
    <div class="products-title section">
        <div class="container-narrow">
            <div class="products-title-wrapper">
                <h1>Our Products</h1>
        
                <div class="radio-btns-wrapper">
                    <div class="radio-btns">
                        <input  @click="filterProducts" type="radio" name="cat" id="all" value="All" checked/>
                        <label  @click="filterProducts" for="all">All</label>
                    </div>
                    <div class="radio-btns">
                        <input  @click="filterProducts" type="radio" name="cat" id="interior" value="Interior Paint"/>
                        <label  @click="filterProducts" for="interior">Interior</label>
                    </div>
                    <div class="radio-btns">
                        <input  @click="filterProducts" type="radio" name="cat" id="exterior" value="Exterior Paint"/>
                        <label  @click="filterProducts" for="exterior">Exterior</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 
    export default {
    methods: {
        // Emit an event with the selected category
        filterProducts(e) {
            const selectedCategory = e.target.value;
            this.$emit('filter', selectedCategory);
        },
    },
    };


</script>

<style src="./ProductsTitle.scss" scoped></style>