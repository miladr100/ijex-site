<template>
  <v-card class="mx-auto" max-width="300" tile>
    <v-row style="margin: 2.5%; position: absolute; top: 130px">
      <v-list-item>
        <v-list-item-avatar size="100">
          <img
            :src="avatarSrc"
            alt="John"
          />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title mb-7" style="color: #6F8090;"
            >{{ nameMember }} | {{ role }}</v-list-item-title
          >
          <v-list-item-subtitle
            >{{ phonePrimary }}</v-list-item-subtitle
          >
          <v-list-item-subtitle
            >{{ phoneSecondary }}</v-list-item-subtitle
          >
          <v-list-item-subtitle
            >{{ email }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-row>
  </v-card>
</template>

<script>
export default {
    props:{
    nameMember: {
      type: String,
      default: '',
      require: true
    },
    role: {
      type: String,
      default: '',
      require: true
    },
    phonePrimary: {
      type: String,
      default: '',
      require: true
    },

    phoneSecondary: {
      type: String,
      default: '',
      require: true
    },
    email: {
      type: String,
      default: '',
      require: true
    },
    avatarSrc: {
      type: String,
      default: '',
      require: true
    },
  },
}
</script>
