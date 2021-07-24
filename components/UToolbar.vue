<!-- Please remove this file from your project -->
<template>
 <v-toolbar absolute dense flat>
      <v-app-bar-nav-icon v-if="smAndDown"></v-app-bar-nav-icon>

      <div v-if="mdAndUp">
        <v-btn v-for="menu in menus" :key="menu.text" class="menu-buttons" elevation="0" text tile small :to="menu.to">{{menu.text}}</v-btn>
      </div>
      
      <v-toolbar-title v-if="smAndDown">Instituto Jovem Exportador</v-toolbar-title>
      <div class="mx-md-12 mx-sm-4"></div>

      <div v-if="smAndUp">
        <v-btn v-for="item in items" :key="item.icon" icon small :href="item.href" target="_blank">
          <v-icon small>{{item.icon}}</v-icon>
        </v-btn>
      </div>
    </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {
          text: 'QUEM SOMOS',
          to: 'about'
        },
        {
          text: 'NOSSOS SERVIÇOS',
          to: 'services'
        },
        {
          text: 'BLOG',
          to: 'blog'
        },
        {
          text: 'EVENTOS',
          to: 'events'
        },
        {
          text: 'FALE CONOSCO',
          to: 'contact'
        }
      ],
       items: [
        {
          icon: 'mdi-facebook',
          href: 'https://www.google.com'
        },
        {
          icon: 'mdi-twitter',
          href: 'https://www.google.com'
        },
        {
          icon: 'mdi-youtube',
          href: 'https://www.google.com'
        },
        {
          icon: 'mdi-instagram',
          href: 'https://www.google.com'
        },
        {
          icon: 'mdi-linkedin',
          href: 'https://www.google.com'
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
    }
  },
}
</script>

<style scoped>
  .menu-buttons {
    border-right: 1.5px solid #5bd1ff;
  }
</style>