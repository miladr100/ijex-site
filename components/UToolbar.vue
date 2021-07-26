<template>
  <v-card class="overflow-hidden" flat color="white">
    <v-app-bar dense flat color="white">
      <v-app-bar-nav-icon v-if="smAndDown" @click="drawerMenu = !drawerMenu"></v-app-bar-nav-icon>

      <div v-if="mdAndUp">
        <v-btn v-for="menu in menus" :key="menu.text" class="menu-buttons" elevation="0" text tile small :to="menu.to">{{getLanguage.menu[menu.text]}}</v-btn>
      </div>
      
      <v-toolbar-title v-if="smAndDown">{{getLanguage.title}}</v-toolbar-title>
      <div class="mx-md-12 mx-sm-4"></div>

      <div v-if="smAndUp">
        <v-btn v-for="item in items" :key="item.icon" icon small :href="item.href" target="_blank">
          <v-icon small>{{item.icon}}</v-icon>
        </v-btn>
      </div>

      <div v-if="smAndUp" style="width: 50px"></div>

      <div v-if="smAndUp">
        <v-btn v-for="icon in languageIcons" :key="icon.language" icon small @click="selectLanguage(icon.language)">
          <span class="iconify" :data-icon="icon.icon" data-inline="false"></span>
        </v-btn>
      </div>   
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawerMenu"
      app
      dark
      class="lighten"
    >
      <v-list>
        <v-list-item link>
          <v-list-item-avatar>
            <img :src="require(`~/static/favicons/ms-icon-310x310.png`)">
          </v-list-item-avatar>

          <v-list-item-action @click="goHome()">
            <v-list-item-title class="text-subtitle-2">{{getLanguage.title_resume}}</v-list-item-title>
            <!-- <v-list-item-subtitle v-text="getLanguage.title" /> -->
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="(menu, i) in menus"
          :key="i"
          :to="menu.to"
          router
          exact
        >
          <v-list-item-action>
            <v-list-item-title v-text="getLanguage.menu[menu.text]" />
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      drawerMenu: false,
      languages: {
        ptBr: {
          title: 'Instituto Jovem Exportador',
          title_resume: 'I. Jovem Exportador',
          menu: {
            about_us: 'QUEM SOMOS',
            our_services: 'NOSSOS SERVIÇOS',
            blog: 'BLOG',
            events: 'EVENTOS',
            contact_us: 'FALE CONOSCO',
          }
        },
        enUs: {
          title: "Young Exporter Institute",
          title_resume: 'I. Young Exporter',
          menu: {
            about_us: 'ABOUT US',
            our_services: 'OUR SERVICES',
            blog: 'BLOG',
            events: 'EVENTS',
            contact_us: 'CONTACT US',
          }
        },
        esMx: {
          title: "Instituto de Jóvenes Exportadores",
          title_resume: 'I. Jóvenes Exportadores',
          menu: {
            about_us: 'QUIENES SOMOS',
            our_services: 'NUESTROS SERVICIOS',
            blog: 'BLOG',
            events: 'EVENTOS',
            contact_us: 'HABLE CON NOSOTRO',
          }
        },
        zhTw: {
          title: "青年出口商协会",
          title_resume: '青年出口商协会',
          menu: {
            about_us: '我们是谁',
            our_services: '我们的服务',
            blog: '博客',
            events: '事件',
            contact_us: '联系我们',
          }
        }
      },
      menus: [
        {
          text: 'about_us',
          to: '/about'
        },
        {
          text: 'our_services',
          to: '/services'
        },
        {
          text: 'blog',
          to: '/blog'
        },
        {
          text: 'events',
          to: '/events'
        },
        {
          text: 'contact_us',
          to: '/contact'
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
      languageIcons: [
        {icon: "twemoji:flag-for-flag-brazil", language: 'ptBr'},
        {icon: "emojione-v1:flag-for-united-states", language: 'enUs'},
        {icon: "emojione-v1:flag-for-spain", language: 'esMx'},
        {icon: "emojione-v1:flag-for-china", language: 'zhTw'}
      ]
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
    getLanguage() {
      return this.languages[this.$store.state.language];
    }
  },
  methods: {
    selectLanguage(language) {
      this.$store.commit("updateLanguage",language);
    },
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .menu-buttons {
    border-right: 1.5px solid #5bd1ff;
  }
  .iconify { width: 24px; height: 24px; }
</style>