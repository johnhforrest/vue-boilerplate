<template>
  <v-footer
    inset
    height="auto"
    color="primary lighten-1"
  >
    <!-- <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-3 white--text"
        icon
      >
        <v-icon size="24px">{{ icon }}</v-icon>
      </v-btn>
    </v-layout> -->
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
      >
        {{ link }}
      </v-btn>
      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2018 — <strong>Vue Boilerplate</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',

  data() {
    return {
      // icons: [
      //   'fab fa-facebook',
      //   'fab fa-twitter',
      //   'fab fa-google-plus',
      //   'fab fa-linkedin',
      //   'fab fa-instagram',
      // ],
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    };
  },
};
</script>
