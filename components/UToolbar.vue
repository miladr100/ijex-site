<template>
  <v-card v-if="!loadingScreen" class="overflow-hidden" flat color="white">
    <v-app-bar dense flat color="white">
      <v-app-bar-nav-icon v-if="smAndDown" @click="drawerMenu = !drawerMenu"></v-app-bar-nav-icon>
      <div v-if="mdAndUp">
        <v-menu
          v-for="menu in menus" :key="menu.text"
          open-on-hover offset-y 
          transition="slide-x-transition" 
          bottom 
          right
          >
            <template #activator="{ on, attrs }">
              <v-btn 
                v-bind="attrs"
                class="menu-buttons"
                elevation="0" 
                text 
                tile 
                small 
                :to="menu.to" 
                v-on="on" 
                >
                  {{$t('TOOLBAR.menu')[menu.text].title}}
                </v-btn>
            </template>
            <v-list v-if="menu.submenu" dense>
                <v-list-item v-for="(submenu, index) in menu.submenu" :key="index" router :to="submenu.to">
                    <v-list-item-action>
                        <v-list-item-title>{{$t('TOOLBAR.menu')[menu.text].submenu[submenu.text]}}</v-list-item-title>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-menu>
      </div>
      
      <v-toolbar-title v-if="smAndDown">{{$t('TOOLBAR.title')}}</v-toolbar-title>
      <div class="mx-md-12 mx-sm-4"></div>

      <div v-if="smAndUp">
        <v-btn v-for="item in items" :key="item.icon" icon small :href="item.href" target="_blank">
          <v-icon small>{{item.icon}}</v-icon>
        </v-btn>
      </div>

      <div v-if="smAndUp" style="width: 50px"></div>

      <v-btn class="ml-4" fab dark x-small color="teal" @click="dialog = !dialog">
        <v-icon small dark>mdi-translate-off</v-icon>
      </v-btn>   
    </v-app-bar>

    <v-navigation-drawer
      v-if="smAndDown"
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
            <v-list-item-title class="text-subtitle-2">{{$t('TOOLBAR.title_resume')}}</v-list-item-title>
            <!-- <v-list-item-subtitle v-text="$t('TOOLBAR.title')" /> -->
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <div v-for="(menu, i) in menus" :key="i">
          <v-list-group v-if="menu.submenu" :value="false">
            <template #activator>
              <v-list-item-title v-text="$t('TOOLBAR.menu')[menu.text].title" />
            </template>
              <v-list-item
                v-for="(submenu, i) in menu.submenu"
                :key="i"
                class="ml-4"
                :to="submenu.to"
                link
              >
                <v-list-item-title v-text="$t('TOOLBAR.menu')[menu.text].submenu[submenu.text]" />
              </v-list-item>
          </v-list-group>

          <v-list-item
            v-else
            :to="menu.to"
            router
            exact
          >
            <v-list-item-action>
              <v-list-item-title v-text="$t('TOOLBAR.menu')[menu.text].title" />
            </v-list-item-action>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-dialog
      v-model="dialog"
      max-width="220"
    >
      <v-card justify="center" align="center">
        <v-card-title class="text-subtitle-2 text-center">
          Know another language?
        </v-card-title>

        <v-card-text v-for="icon in languageIcons" :key="icon.language">
            <v-btn icon small @click="selectLanguage(icon.language)">
              <span class="iconify" :data-icon="icon.icon" data-inline="false"></span>
              <v-card-subtitle>{{icon.iso}}</v-card-subtitle>
            </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      drawerMenu: false,
      menus: [
        {
          text: 'exporter',
          to: '',
          submenu: [
            {
              text: 'about_us',
              to: '/exporter/about',
            },
            {
              text: 'team',
              to: '/exporter/team',
            },
            {
              text: 'who',
              to: '/exporter/who',
            },
          ],
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
          text: 'partners',
          to: '/partners'
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
        {icon: "twemoji:flag-for-flag-brazil", language: 'pt', iso: 'pt-BR'},
        {icon: "emojione-v1:flag-for-united-states", language: 'en', iso: 'en-US'},
        {icon: "emojione-v1:flag-for-spain", language: 'es', iso: 'es-MX'},
        {icon: "emojione-v1:flag-for-china", language: 'zh', iso: 'zh-TW'}
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
    xsOnly() {
      return this.$vuetify.breakpoint.xsOnly
    },
    loadingScreen() {
      return this.$store.getters.getStateLoadingScreen
    },
  },
  methods: {
    selectLanguage(language) {
      this.$i18n.setLocale(language)
      this.$store.dispatch('setLoadingScreen', 1000)
      this.dialog = false
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