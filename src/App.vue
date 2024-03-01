<template>
  <div>
    <v-tabs
      v-model="tab"
      align-tabs="end"
      color="deep-purple-accent-4"
    >
      <div @click="redirectTo('products')">
        <v-tab :value="1">Products</v-tab>
      </div>
      <div @click="redirectTo('hello')">
        <v-tab :value="2">Hello User</v-tab>
      </div>
      <div @click="redirectTo('form')">
        <v-tab :value="3">Form</v-tab>
      </div>
      <div @click="redirectTo('register')">
        <v-tab :value="4">Register</v-tab>
      </div>
      <div @click="redirectTo('admin-list')">
        <v-tab :value="5">Admin List</v-tab>
      </div>
      <div @click="redirectTo('generator')">
        <v-tab :value="6">Generator</v-tab>
      </div>
      <div @click="redirectTo('list')">
        <v-tab :value="7">List</v-tab>
      </div>
    </v-tabs>
    
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data()  {
    return {
      tab: null
    }
  },
  methods: {
    redirectTo(nameRoute) {
      this.$router.push({
        name: nameRoute,
      })
    }
  }
  
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

