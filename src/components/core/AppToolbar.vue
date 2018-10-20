<template>
  <v-toolbar app>
    <v-toolbar-side-icon
      @click="$store.commit('app/DRAWER_TOGGLE')"
    >
    </v-toolbar-side-icon>
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'AppToolbar',

  data() {
    return {
      title: 'Vue Boilerplate',
    };
  },
};
</script>
