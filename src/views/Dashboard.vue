<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <div>
          <v-card to="/card-1">
            <v-card-title primary-title>
              <div>
                <h3 class="headline">View section 1</h3>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus in faucibus turpis, ut convallis neque.
                </div>
              </div>
            </v-card-title>
          </v-card>
          <v-card to="/card-2">
            <v-card-title primary-title>
              <div>
                <h3 class="headline">View section 2</h3>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus in faucibus turpis, ut convallis neque.
                </div>
              </div>
            </v-card-title>
          </v-card>
          <v-card to="/card-3">
            <v-card-title primary-title>
              <div>
                <h3 class="headline">View section 3</h3>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus in faucibus turpis, ut convallis neque.
                </div>
              </div>
            </v-card-title>
          </v-card>
        </div>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>

<style>

</style>
