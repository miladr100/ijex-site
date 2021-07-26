<template>
  <v-row :justify="getJustify">
    <v-col v-if="mdAndUp" cols="2">
      <v-row>
        <v-col cols="12">
          <v-img
            max-width="150"
            :src="require(`~/static/images/logo_programa.png`)"
          ></v-img>
        </v-col>
        <v-col cols="12">
          <v-card
            elevation="0"
            tile
            >
            <v-card-title class="text-h5">
              {{getLanguage.card.title_first}}<br/>
              {{getLanguage.card.title_second}}<br/>
              {{getLanguage.card.title_third}}
            </v-card-title>
            <v-card-text><b>{{getLanguage.card.text_first}}</b>{{getLanguage.card.text_second}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="7" class="mt-6">
      <v-row>
        <v-col cols="11">
          <v-carousel hide-delimiters height="100%">
            <v-carousel-item
              v-for="(item,i) in carousel"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import brazilAmerica from '~/static/images/brazil_america.png'
  export default {
    data () {
      return {
        languages: {
          ptBr: {
            card: {
              title_first: "Acesse",
              title_second: "sua",
              title_third: "região!",
              text_first: "ASSOCIE-SE",
              text_second: " ao Núcleo do Programa Jovem Exportador de sua região."
            }
          },
          enUs: {
            card: {
              title_first: "Access",
              title_second: "your",
              title_third: "region!",
              text_first: "JOIN",
              text_second: " to the Young Exporter Program Center in your region."
            }
          },
          esMx: {
            card: {
              title_first: "Accede",
              title_second: "a tu",
              title_third: "región!",
              text_first: "ASOCIARSE",
              text_second: " con el Centro del Programa de Jóvenes Exportadores de su región."
            }
          },
          zhTw: {
            card: {
              title_first: "访问",
              title_second: "您所在的地区!",
              title_third: "",
              text_first: "ASSOCIE-SE",
              text_second: " ao Núcleo do Programa Jovem Exportador de sua região."
            }
          }
        },
        carousel: [
          {
            src: brazilAmerica,
          },
        ],
      }
    },
    computed: {
      mdAndUp() {
        return this.$vuetify.breakpoint.mdAndUp
      },
      getLanguage() {
        return this.languages[this.$store.state.language];
      },
      getJustify() {
        return this.mdAndUp ? 'start' : 'center'
      }
    }
  }
</script>
