<template>
  <v-navigation-drawer
    v-model="drawerModel"
    app
  >
    <v-list>
      <v-list-tile
        value="true"
        v-for="(item, i) in items"
        :key="i"
        :to="item.path"
      >
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'AppDrawer',

  data() {
    return {
      items: [{
        icon: 'home',
        title: 'Home',
        path: '/',
      }],
    };
  },

  computed: {
    ...mapState('app', ['showDrawer']),

    drawerModel: {
      get() {
        return this.showDrawer;
      },

      set(value) {
        this.setShowDrawer(value);
      },
    },
  },

  methods: {
    ...mapMutations('app', {
      setShowDrawer: 'SET_SHOW_DRAWER',
    }),
  },
};
</script>

<style>

</style>
