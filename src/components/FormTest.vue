<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
      <v-select v-model="select" :items="items" :rules="itemsRules" label="Item" required>
      </v-select>
      <v-checkbox v-model="checkbox" :rules="checkboxRules" label="Do you agree?" required></v-checkbox>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn>
      <v-btn color="error" class="mr-4" @click="reset">
        Reset Form
      </v-btn>
      <v-btn color="warning" @click="resetValidation">
        Reset Validation
      </v-btn>
    </v-form>

    <v-row justify="space-between">
      <v-col cols="12" md="4">
        <v-form ref="form">
          <v-text-field v-model="model" :counter="max" :rules="rules" label="First name"></v-text-field>
        </v-form>
      </v-col>

      <v-col cols="12" md="6">
        <v-slider v-model="max" label="Max characters">
        </v-slider>

        <v-checkbox v-model="allowSpaces" label="Allow spaces"></v-checkbox>

        <v-text-field v-model="match" label="Value must match"></v-text-field>
      </v-col>
    </v-row>

  </v-container>
</template>
  
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FormTest',
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v: string) => !!v || 'Name is required',
      (v: string) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v: string) => !!v || 'E-mail is required',
      (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    itemsRules: [
      (v: string) => !!v || 'Item is required'
    ],
    checkbox: false,
    checkboxRules: [
      (v: string) => !!v || 'You must agree to continue!'
    ],
    allowSpaces: false,
    match: 'Foobar',
    max: 0,
    model: 'Foobar'
  }),
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    validateField() {
      this.$refs.form.validate()
    },
  },
  computed: {
    rules() {
      const rules = []

      if (this.max) {
        const rule =
          v => (v || '').length <= this.max ||
            `A maximum of ${this.max} characters is allowed`

        rules.push(rule)
      }

      if (!this.allowSpaces) {
        const rule =
          v => (v || '').indexOf(' ') < 0 ||
            'No spaces are allowed'

        rules.push(rule)
      }

      if (this.match) {
        const rule =
          v => (!!v && v) === this.match ||
            'Values do not match'

        rules.push(rule)
      }

      return rules
    },
  },
  watch: {
    match: 'validateField',
    max: 'validateField',
    model: 'validateField',
  },
})
</script>
  