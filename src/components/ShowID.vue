<template>
  <v-container class="bg-info text-center">
    <p> Номер id цього товару: {{ this.$route.params.id }}</p>
  </v-container>
</template>

<script>

export default {
  name: 'ShowID',
  
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