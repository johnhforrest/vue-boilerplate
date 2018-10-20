<template>
  <v-app>
    <app-drawer />
    <app-toolbar />

    <v-content>
      <router-view />

      <v-snackbar
        :bottom="true"
        :right="true"
        :value="notification"
      >
        {{ notification }}
        <v-btn
          color="pink"
          flat
          @click="$store.commit('app/CLEAR_NOTIFICATION')"
        >
          Close
        </v-btn>
      </v-snackbar>
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

import AppDrawer from './components/core/AppDrawer.vue';
import AppFooter from './components/core/AppFooter.vue';
import AppToolbar from './components/core/AppToolbar.vue';

export default {
  name: 'App',

  components: {
    AppDrawer,
    AppFooter,
    AppToolbar,
  },

  computed: {
    ...mapState('app', ['notification']),
  },
};
</script>
