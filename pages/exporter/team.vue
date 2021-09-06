<template>
  <div
    class="d-flex pt-4 flex-column fill-height"
    align="center"
    justify="center"
  >
    <div align="center" justify="center">

      <div class="text-h5 font-weight-bold mb-2"><span  style="color: #194f34;">{{ $t(`CORE.title`) }}</span></div>
      <div class="text-h6 mb-3">{{ $t(`CORE.subtitle`) }}</div>
    </div>
    <div class="d-flex justify-md-space-between justify-lg-space-between">
      <UMemberCard
        class="pt-15"
        :avatar-src="member.profileImg"
        :name-member="member.name"
        :name-state="member.stateAcronym"
        :member-role="$t(`CORE.member.${member.role}`)"
        :position="member.position"
      />
      <URegion />
    </div>
  </div>
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
}
</script>
<style scoped>

</style>