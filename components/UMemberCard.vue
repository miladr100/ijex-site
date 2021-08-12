<template>
  <v-card align="center" elevation="0" max-width="200">
    <v-row align="center">
      <v-col align-self="start" cols="12">
        <v-avatar class="profile" size="164">
          <v-img
            :src="avatarSrc"
          ></v-img>
        </v-avatar>
      </v-col>
      <v-col class="py-0" cols="12">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title style="color: black" class="text-h6">
              {{nameMember}}
            </v-list-item-title>
            <v-list-item-subtitle style="color: black"
              >{{nameState}}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col>
        <v-img max-height="80" max-width="40" :src="stateSrc"></v-img>
      </v-col>
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
    avatarSrc: {
      type: String,
      default: '',
      require: true
    },
    nameState: {
      type: String,
      default: '',
      require: true
    },
    stateSrc: {
      type: String,
      default: '',
      require: true
    }
  },
}
</script>
