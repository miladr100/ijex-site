<template>
  <v-sheet class="mx-auto" elevation="8" max-width="1200">
    <v-slide-group v-model="model" multiple show-arrows class="pa-4">
      <v-slide-item
        v-for="state in states"
        :key="state"
        v-slot="{ active }"
      >
          <v-btn
            :input-value="active"
            max-height="80"
            max-width="40"
            disabled


          >
            <v-img
            class="ml-8"
            max-height="80"
            max-width="40"
            :src="state"

          ></v-img>
          </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import acre from '../static/images/states/acre.svg'
import alagoas from '../static/images/states/alagoas.svg'
import amapa from '../static/images/states/amapa.svg'
import amazonas from '../static/images/states/amazonas.svg'
import bahia from '../static/images/states/bahia.svg'
import ceara from '../static/images/states/ceara.svg'
import distritoFederalBrasil from '../static/images/states/distrito_federal_brasil.svg'
import espiritoSanto from '../static/images/states/espirito_santo.svg'
import goias from '../static/images/states/goias.svg'
import maranhao from '../static/images/states/maranhao.svg'
import matoGrosso from '../static/images/states/mato_grosso.svg'
import matoGrossoDoSul from '../static/images/states/mato_grosso_do_sul.svg'
import minasGerais from '../static/images/states/minas_gerais.svg'
import para from '../static/images/states/para.svg'
import paraiba from '../static/images/states/paraiba.svg'
import parana from '../static/images/states/parana.svg'
import pernambuco from '../static/images/states/pernambuco.svg'
import piaui from '../static/images/states/piaui.svg'
import rioDeJaneiro from '../static/images/states/rio_de_janeiro.svg'
import rioGrandeDoNorte from '../static/images/states/rio_grande_do_norte.svg'
import rioGrandeDoSul from '../static/images/states/rio_grande_do_sul.svg'
import rondonia from '../static/images/states/rondonia.svg'
import roraima from '../static/images/states/roraima.svg'
import santaCatarina from '../static/images/states/santa_catarina.svg'
import saoPaulo from '../static/images/states/sao_paulo.svg'
import sergipe from '../static/images/states/sergipe.svg'
import tocantins from '../static/images/states/tocantins.svg'

export default {
  data: () => ({
    states: [
      acre,
      alagoas,
      amapa,
      amazonas,
      bahia,
      ceara,
      distritoFederalBrasil,
      espiritoSanto,
      goias,
      maranhao,
      matoGrosso,
      matoGrossoDoSul,
      minasGerais,
      para,
      paraiba,
      parana,
      pernambuco,
      piaui,
      rioDeJaneiro,
      rioGrandeDoNorte,
      rioGrandeDoSul,
      rondonia,
      roraima,
      santaCatarina,
      saoPaulo,
      sergipe,
      tocantins,
    ],
  }),
}
</script>

<style>
.theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
    background-color: transparent !important;
}

</style>
