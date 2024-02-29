<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-text-field v-model="formData.name" label="Ім'я" required :error-messages="errors.name"></v-text-field>
      <v-text-field v-model="formData.email" label="Електронна пошта" required :error-messages="errors.email"></v-text-field>
      <v-btn type="submit" color="primary">Надіслати</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "FormEvent",
  data() {
    return {
      formData: {
        name: '',
        email: ''
      },
      errors: {
        name: [],
        email: []
      }
    };
  },
  methods: {
    submitForm() {
      this.errors = { name: [], email: [] };
      if (!this.formData.name) {
        this.errors.name.push("Будь ласка, введіть ім'я.");
      }
      if (!this.formData.email) {
        this.errors.email.push("Будь ласка, введіть електронну пошту.");
      } else if (!this.isValidEmail(this.formData.email)) {
        this.errors.email.push("Будь ласка, введіть правильну електронну пошту.");
      }

      if (Object.keys(this.errors).length === 0) {
        console.log("Форма відправлена:", this.formData);
      }
    },
    isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  }
};
</script>

<style>

</style>


