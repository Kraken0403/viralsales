<template>
    <div class="products-title section">
        <div class="container-narrow">
            <div class="products-title-wrapper">
                <h1>Our Products</h1>
        
                <!-- <div class="radio-btns-wrapper">
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
                    <div class="radio-btns">
                        <input @click="filterProducts" type="radio" name="cat" id="enamels" value="Enamels"/>
                        <label @click="filterProducts" for="enamels">Enamels</label>
                    </div>
                    <div class="radio-btns">
                        <input @click="filterProducts" type="radio" name="cat" id="primers" value="Primers"/>
                        <label @click="filterProducts" for="primers">Primers</label>
                    </div>
                    <div class="radio-btns">
                        <input @click="filterProducts" type="radio" name="cat" id="putty" value="Putty"/>
                        <label @click="filterProducts" for="putty">Putty</label>
                    </div>
                    <div class="radio-btns">
                        <input @click="filterProducts" type="radio" name="cat" id="protective-textures" value="Protective Textures"/>
                        <label @click="filterProducts" for="protective-textures">Protective Textures</label>
                    </div>
                </div> -->

                <div class="dropdown-wrapper">
                    <!-- <h4>Filter: </h4> -->
                    <select @change="filterProducts" class="product-filter-dropdown">
                        <option value="All" selected>All</option>
                        <option value="Interior Paint">Interior</option>
                        <option value="Exterior Paint">Exterior</option>
                        <option value="Enamels">Enamels</option>
                        <option value="Primers">Primers</option>
                        <option value="Putty">Putty</option>
                        <option value="Protective Textures">Protective Textures</option>
        
                    </select>
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