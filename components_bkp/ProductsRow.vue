<template>
    <div class="products-row-wrapper">
        <div class="container-narrow">
            <div class="products-row">
                <div class="row">
                    <div v-for="item in productData" :key="item.id" class="col-50">
                        <ProductsCard :product="item"/>
                    </div>

                    <!-- <div class="col-50 right">
                        <ProductsCard/>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            productData: Array,
           // Define the expected prop type
        },
    };
</script>
<style src="./ProductRow.scss" scoped>

</style>