<template>
  <v-card
      class="mx-auto"
      max-width="344"
  >

    <v-img
        :src="product.image"
        height="288px"
        cover
    ></v-img>

    <v-card-title>
      {{ product.title }}
    </v-card-title>

    <v-card-subtitle>
      Category: {{ product.category }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
      v-if:="product.category == 'jewelery'"
          color="orange-lighten-2"
          variant="text"
      >
        Explore
      </v-btn>
      <span v-else:> NO DESCRIPTION </span>

      <v-spacer></v-spacer>

      <v-btn
          color="orange-lighten-2"
          variant="text"
          @click="deleteProduct"
      >
        Delete
      </v-btn>

      <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="countViewedProducts"
          :style="{color: show ? redStyle : '', 'text-decoration': underlineStyle}"
      >More</v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show:="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ product.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>

import axiosInstance from "../../services/axios";


export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      show: false,
      isViewedProduct: false,
      redStyle: 'red',
      underlineStyle: 'underline'
    }
  },
  methods: {
    countViewedProducts() {
      this.show = !this.show
      //if (!this.isViewedProduct) {
        this.isViewedProduct = true
        this.$emit('viewedProduct')
      //}
      
    },
    deleteProduct() {
      this.$emit('delete-product', this.product.id)
    }
  }
}

</script>

<style scoped>
  .red {
    color: red;
  }
  .underline {
    text-decoration: underline;
  }
</style>