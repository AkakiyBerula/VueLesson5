<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item" :style="item.style">{{ item.text }}</li>
    </ul>
    <v-btn 
      @click="regenerateItems" 
      color="info">
      Згенерувати елементи знову
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "GenerateItems",
  data() {
    return {
      items: []
    };
  },
  created() {
    this.generateItems();
  },
  methods: {
    generateItems() {
      const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff'];
      const fonts = ['12px', '14px', '16px', '18px', '20px'];

      for (let i = 0; i < 10; i++) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

        this.items.push({
          text: `Елемент ${i+1}`,
          style: {
            backgroundColor: randomColor,
            fontSize: randomFont
          }
        });
      }
    },
    regenerateItems() {
      this.items = [];
      this.generateItems();
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px;
  padding: 10px;
}
</style>





