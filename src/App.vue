<template>
  <v-app>
    <v-app-bar color="primary" dense app>
      <!-- -->
    </v-app-bar>

    <v-navigation-drawer app>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQHAvAZdEkOBxQ/profile-displayphoto-shrink_800_800/0/1612061437481?e=1674691200&v=beta&t=2xiSeav2USlTIuUNkXKDeKE8OnD9_p4i2mrhVPnqqk0">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Julian Henao</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-4">
          <v-btn color="primary" block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main app>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view />

      </v-container>
    </v-main>

    <v-footer app>
      <span>
        Version 1.0.0
      </span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    items: [
      { title: 'Home', icon: 'mdi-home-city' },
      { title: 'My Account', icon: 'mdi-account' },
      { title: 'Users', icon: 'mdi-account-group-outline' },
    ],
  }),
});
</script>
