<template>
  <v-container class="bg-info text-center">
    <p> Номер id цього товару: {{ this.$route.params.id }}</p>
    <p> Номер id, переданий через props {{ id }}</p>
  </v-container>
</template>

<script>

export default {
  name: 'ShowID',
  props: ["id"]
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