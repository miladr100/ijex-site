<template>
  <v-container>
    <v-row v-if="loadingScreen" class="mt-16">
      <v-col class="d-flex justify-center align-center mt-16">
        <v-progress-circular
          class="mt-16"
          indeterminate
          :size="80"
          color="teal"
        ></v-progress-circular>
      </v-col>
    </v-row>
    <div v-else>
      <v-row :justify="getJustify">
        <v-col v-if="mdAndUp" cols="2">
          <v-row>
            <v-col cols="12">
              <v-img
                max-width="150"
                :src="require(`~/static/images/logo_programa.png`)"
              ></v-img>
            </v-col>
            <v-col cols="12">
              <v-card
                elevation="0"
                tile
                >
                <v-card-title class="text-h5">
                  {{$t('HOME.card.title_first')}}<br/>
                  {{$t('HOME.card.title_second')}}<br/>
                  {{$t('HOME.card.title_third')}}
                </v-card-title>
                <v-card-text><b>{{$t('HOME.card.text_first')}}</b>{{$t('HOME.card.text_second')}}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="7" class="mt-6">
          <v-row>
            <v-col cols="11">
              <v-carousel hide-delimiters height="100%">
                <v-carousel-item
                  v-for="(item,i) in carousel"
                  :key="i"
                  :src="item.src"
                ></v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <UFlags />
      </v-row>
    </div>
  </v-container>
</template>

<script>
import brazilAmerica from '~/static/images/brazil_america.png'
import UFlags from '~/components/UFlags';

export default {
  components: {
    UFlags
  },
  data () {
    return {
      carousel: [
        {
          src: brazilAmerica,
        },
      ],
    }
  },
  computed: {
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp
    },
    getJustify() {
      return this.mdAndUp ? 'start' : 'center'
    },
    loadingScreen() {
      return this.$store.getters.getStateLoadingScreen
    },
  },
  mounted() {
    this.$store.dispatch('setLoadingScreen',2000)
  },
}
</script>
