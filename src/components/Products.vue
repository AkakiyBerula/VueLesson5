<template>
  <div>
    <h1 class="text-center">Products</h1>
    <v-container>
      <v-row justify="space-between">
        <v-col>
          <v-sheet align="start" class="pa-2 ma-2">
            Viewed Products
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet align="end" class="pa-2 ma-2">
            {{ viewedProducts }}
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for:="product in products" :key="product.id">
          <product
            :product="product"
            @viewed-product.once="viewedProducts++"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import axiosInstance from "../../services/axios";
import Product from "./Product.vue";


export default {
  name: 'Products',
  components: {
    Product
  },
  data() {
    return {
      products: [],
      viewedProducts: 0
    }
  },
  methods: {
    getProducts() {
      axiosInstance.get("/products")
        .then(response => {
          this.products = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted() {
    this.getProducts();
    console.log(this.$route.meta.message);
  }

}

</script>

<style scoped>

</style>