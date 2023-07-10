<template>
  <v-container>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
  </v-container>
</template>
  
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Breadcrumb',
  data: () => ({
    items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
  })
})
</script>
  