<template>
    <v-row align="center" justify="center" class="mx-4">
      <v-col cols="12" lg="3" md="3">
        <v-card class="overflow-hidden mb-12 text-center" flat color="white">
          <v-card-title v-if="mdAndUp" class="d-flex flex-row justify-center text-h6 mb-2" style="color: #1B5E20;">{{$t('ABOUT.title_first')}}<br/>{{$t('ABOUT.title_second')}}</v-card-title>
          <v-card-title v-else class="d-flex flex-row justify-center text-h6 mb-2" style="color: #1B5E20;">{{$t('ABOUT.title_first')}} {{$t('ABOUT.title_second')}}</v-card-title>

          <v-card-subtitle class="text-justify">{{$t('ABOUT.text')}}</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" lg="8" md="8">
        <v-row justify="center">
          <v-col v-for="member in members" :key="member.name">
            <UMemberCard
              :avatar-src="member.profileImg" 
              :state-src="member.stateImg" 
              :name-member="member.name" 
              :name-state="member.state"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
</template>

<script>
import UMemberCard from '~/components/UMemberCard';
import acre from '~/static/images/states/acre.svg';
import ronan from '~/static/images/team/ronan_pires.jpg';

export default {
  components: {
    UMemberCard,
  },
  data () {
    return {
      members: [
        {
          name: "Ronan Pires",
          profileImg: ronan,
          state: "Mato Grosso do Sul",
          stateImg: acre,
        },
        {
          name: "Ronan Pires",
          profileImg: ronan,
          state: "Mato Grosso do Sul",
          stateImg: acre,
        },
        {
          name: "Ronan Pires",
          profileImg: ronan,
          state: "Mato Grosso do Sul",
          stateImg: acre,
        },
        {
          name: "Ronan Pires",
          profileImg: ronan,
          state: "Mato Grosso do Sul",
          stateImg: acre,
        },
        {
          name: "Ronan Pires",
          profileImg: ronan,
          state: "Mato Grosso do Sul",
          stateImg: acre,
        }
      ],
    }
  },
  computed: {
    smAndUp() {
      return this.$vuetify.breakpoint.smAndUp
    },
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp
    },
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown
    },
    xsOnly() {
      return this.$vuetify.breakpoint.xsOnly
    },
    loadingScreen() {
      return this.$store.getters.getStateLoadingScreen
    },
  },
}
</script>