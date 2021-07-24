<template>
  <v-row justify="start">
    <v-col cols="2">
      <v-row>
        <v-col cols="12">
          <v-img
            :src="require(`~/static/images/brazil_painted.png`)"
          ></v-img>
        </v-col>
        <v-col cols="12">
          <v-card
            elevation="0"
            tile
            >
            <v-card-title class="text-h5">{{getLanguage.card.title_first}}<br/>{{getLanguage.card.title_second}}
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
              title_second: "sua região!",
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
      getLanguage() {
        const lang = 'ptBr'
        return this.languages[lang];
      }
    }
  }
</script>
