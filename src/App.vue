<template>
  <div>
    <v-tabs
      v-model="tab"
      align-tabs="end"
      color="deep-purple-accent-4"
    >
      <router-link to="/">
        <v-tab :value="1">Products</v-tab>
      </router-link>
      <router-link to="/hello-user">
        <v-tab :value="2">Hello User</v-tab>
      </router-link>
      <router-link to="/form">
        <v-tab :value="3">Form</v-tab>
      </router-link>
      <router-link to="/register">
        <v-tab :value="4">Register</v-tab>
      </router-link>
      <router-link to="admin-list">
        <v-tab :value="5">Admin List</v-tab>
      </router-link>
      <router-link to="/generator">
        <v-tab :value="6">Generator</v-tab>
      </router-link>
      <router-link to="/product-info/1">
        <v-tab :value="7">First Element</v-tab>
      </router-link>
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

