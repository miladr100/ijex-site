<template>
    <v-row justify="center" align="center">
        <v-card class="overflow-hidden mb-12" flat color="white">
          <div class="d-flex flex-column align-center">
            <v-img
              max-width="250"
              :src="require(`~/static/images/logo_programa.png`)"
            ></v-img>
            <v-card-title>{{$t('GENERAL.in_construction')}}</v-card-title>
            <v-card-subtitle>{{$t('GENERAL.in_construction_subtitle')}}</v-card-subtitle>
          </div>
        </v-card>
    </v-row>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>