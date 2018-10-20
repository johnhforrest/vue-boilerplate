// https://vuetifyjs.com/en/guides/a-la-carte

// @TODO: Audit for Judy
import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VCard,
  VForm,
  VTextField,
  VTextarea,
  VSnackbar,
  VDialog,
  VChip,
  VSpeedDial,
  VSelect,
  VCheckbox,
  VAutocomplete,
  transitions,
} from 'vuetify';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VCard,
    VForm,
    VTextField,
    VTextarea,
    VSnackbar,
    VDialog,
    VChip,
    VSpeedDial,
    VSelect,
    VCheckbox,
    VAutocomplete,
    transitions,
  },

  // NOTE: Commenting this out to use the default theme
  //  but leaving this here for reference
  // theme: {
  //   primary: '#ee44aa',
  //   secondary: '#424242',
  //   accent: '#82B1FF',
  //   error: '#FF5252',
  //   info: '#2196F3',
  //   success: '#4CAF50',
  //   warning: '#FFC107'
  // },
});
