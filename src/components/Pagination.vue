<template>
  <v-container>
    <v-list class="bg-primary text-center">
      <v-list-item v-for="(item, index) in paginatedList" :key="index">
        <p><b>{{ index + 1 + pageSize * (currentPage - 1) }}: </b>{{ item }}</p>
      </v-list-item>

      <v-btn @click="prevPage" :disabled="currentPage === 1" class="mr-2" color="secondary">Попередня</v-btn>

      <span>Сторінка {{ currentPage }} з {{ totalPages }}</span>

      <v-btn @click="nextPage" :disabled="currentPage === totalPages" class="ml-2" color="secondary">Наступна</v-btn>

    </v-list>
    <router-link :to="'/list/filter-list'">
      <v-btn 
        color="orange-lighten-2"
        variant="text"
      >
          Показати відфільтрований список
      </v-btn>

      </router-link>
      <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      pageSize: 5,
      currentPage: 1
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.list.length / this.pageSize);
    },
    paginatedList() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.list.slice(startIndex, endIndex);
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  },
  created() {
    for (let i = 1; i <= 20; i++) {
      this.list.push(Math.floor(Math.random() * 100));
    }
  }
};
</script>

<style scoped>

</style>









