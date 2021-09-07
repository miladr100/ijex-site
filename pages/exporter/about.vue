<template>
  <v-row>
    <v-row v-if="loadingScreen" justify="center" align="center">
			<v-progress-circular indeterminate :size="80" color="teal"></v-progress-circular>
		</v-row>
    <v-row v-else justify="center" class="mx-md-12 mt-4">
        <v-col cols="10">
          <v-card class="overflow-hidden" flat color="green lighten-4">
            <v-card-title class="d-flex justify-center">{{$t('ABOUT.about_title')}}</v-card-title>
            <v-card-text class="text-subtitle-1 text-justify">{{$t('ABOUT.about_description_first')}}</v-card-text>
            <v-card-text class="text-subtitle-1 text-justify mt-n7">{{$t('ABOUT.about_description_second')}}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="10" class="mt-lg-n12">
          <v-row>
            <v-col cols="12" lg="6" ms="6" sm="12">
              <v-card class="overflow-hidden" flat color="light-green lighten-4">
                <v-card-title class="d-flex justify-center">{{$t('ABOUT.vision_title')}}</v-card-title>
                <v-card-text class="text-subtitle-1 text-justify">{{$t('ABOUT.vision_description')}}</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="6" ms="6" sm="12">
              <v-card class="overflow-hidden" flat color="light-green lighten-4">
                <v-card-title class="d-flex justify-center">{{$t('ABOUT.mission_title')}}</v-card-title>
                <v-card-text class="text-subtitle-1 text-justify">{{$t('ABOUT.mission_description')}}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    loadingScreen() {
      return this.$store.getters.getStateLoadingScreen
    },
  },
  mounted() {
    this.$store.dispatch('setLoadingScreen', 350)
  },
}
</script>