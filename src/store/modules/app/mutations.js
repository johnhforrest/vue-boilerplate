/* eslint-disable no-param-reassign */

export default {
  DRAWER(state, payload) {
    state.showDrawer = payload;
  },

  DRAWER_TOGGLE(state) {
    state.showDrawer = !state.showDrawer;
  },

  SET_SHOW_DRAWER(state, payload) {
    state.showDrawer = payload;
  },

  NOTIFICATION(state, payload) {
    state.notification = payload;
  },

  CLEAR_NOTIFICATION(state) {
    state.notification = null;
  },
};
