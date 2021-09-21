<template>
  <UContact
    :name-rule-required="$t('CONTACT.component.validators.nameRequired')"
    :email-rule-required="$t('CONTACT.component.validators.emailRequired')"
    :email-rule-not-valid="$t('CONTACT.component.validators.emailValid')"
    :message-rule-required="$t('CONTACT.component.validators.messageRequired')"
    :message-rule-small="$t('CONTACT.component.validators.messageValid')"
    :subject-rule-required="$t('CONTACT.component.validators.subjectRequired')"
   />
</template>

<script>
import UContact from '~/components/UContact'

export default {

  components: {
    UContact
  },
  name: "Contact",
  data: () => ({
  })
};
</script>