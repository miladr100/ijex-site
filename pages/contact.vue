<template>
  <v-row>
    <v-row v-if="loadingScreen" justify="center" align="center">
			<v-progress-circular indeterminate :size="80" color="teal"></v-progress-circular>
		</v-row>
    <UContact
      v-else
      :name-rule-required="$t('CONTACT.component.validators.nameRequired')"
      :email-rule-required="$t('CONTACT.component.validators.emailRequired')"
      :email-rule-not-valid="$t('CONTACT.component.validators.emailValid')"
      :message-rule-required="$t('CONTACT.component.validators.messageRequired')"
      :message-rule-small="$t('CONTACT.component.validators.messageValid')"
      :subject-rule-required="$t('CONTACT.component.validators.subjectRequired')"
    />
  </v-row>
</template>

<script>
import UContact from '~/components/UContact'

export default {
  name: "Contact",
  components: {
    UContact
  },
  data: () => ({
  }),
  computed: {
    loadingScreen() {
      return this.$store.getters.getStateLoadingScreen
    },
  },
  mounted() {
    this.$store.dispatch('setLoadingScreen', 200)
  }
};
</script>