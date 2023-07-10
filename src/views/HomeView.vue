<template>
  <v-container>
    <breadcrumb />
    <grid />
    <form-test />
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Grid from '../components/Grid.vue'
  import Breadcrumb from '../components/Breadcrumb.vue'
  import FormTest from '../components/FormTest.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
      Grid,
      Breadcrumb,
      FormTest
    },
  })
</script>
