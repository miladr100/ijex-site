<template>
  <v-row>
    <v-row v-if="loadingScreen" justify="center" align="center">
			<v-progress-circular indeterminate :size="80" color="teal"></v-progress-circular>
		</v-row>
    <v-row
      v-else
      class=" pt-4 fill-height"
      align="center"
      justify="center"
    >
      <v-col cols="12" align="center" justify="center">

        <div class="text-h5 font-weight-bold mb-2"><span  style="color: #194f34;">{{ $t(`CORE.title`) }}</span></div>
        <div class="text-h6 mb-3">{{ $t(`CORE.subtitle`) }}</div>
      </v-col>
      <v-col cols="12" lg="4" md="4" sm="12" xs="12">
        <UMemberCard
            class="pt-15"
            :avatar-src="member.profileImg"
            :name-member="member.name"
            :name-state="member.stateAcronym"
            :member-role="$t(`CORE.member.${member.role}`)"
            :position="member.position"
          />
      </v-col>
      <v-col cols="12" lg="8" md="8" sm="12" xs="12">
        <URegion />
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
// :member-role="$t(`CORE.member.${member.role}`)"
import URegion from '~/components/URegion'
import UMemberCard from '~/components/UMemberCard'
import antonioCruz from '~/static/images/team/antonio.png'

export default {
  components: {
    URegion,
    UMemberCard,
  },
  data() {
    return {
      member: {
        name: 'Antônio Cruz',
        profileImg: antonioCruz,
        stateAcronym: 'Pará-PA',
        role: 'role',
        position: 'top',
      },
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
<style scoped>

</style>