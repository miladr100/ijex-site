<template>
  <div>
    <h2 class="text-center pa-3">PARCEIROS</h2>
    <v-container class="grey lighten-5">
      <v-row

        no-gutters
        style="height: 50vh; width: 80vw"
      >
        <v-col
          v-for="partner in partners"
          :key="partner"
          :align-self="partner"
        >
          <v-card
            class="d-flex align-center mb-6"
            outlined
            tile
          >
            <v-img
              class="ml-4"
              max-height="200"
              max-width="200"
              :src="partner"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import apexBrasil from '../static/images/partners/apex_brasil.png'
  import cniLogo from '../static/images/partners/cni_logo.png'
  import dubaiChamber from '../static/images/partners/dubai_chamber.png'
  import fecomercioDf from '../static/images/partners/fecomercio_df.png'
  import fibra from '../static/images/partners/fibra.png'
  import fieam from '../static/images/partners/fieam.png'
  import fiems from '../static/images/partners/fiems.png'
  import fiepi from '../static/images/partners/fiepi.png'
  import idesam from '../static/images/partners/idesam.png'
  import ifmsLogo from '../static/images/partners/ifms_logo.png'
  import jci from '../static/images/partners/jci.png'
  import ministerioDaAgricultura from '../static/images/partners/ministerio_da_agricultura.png'
  import peiex from '../static/images/partners/peiex.png'
  import sebrae from '../static/images/partners/sebrae.png'
  import sedesc from '../static/images/partners/sedesc.png'
  import semagro from '../static/images/partners/semagro.png'
  import senac from '../static/images/partners/senac.png'
  import sidectiAmazonas from '../static/images/partners/sidecti_amazonas.png'
  import sudesco from '../static/images/partners/sudesco.png'
  import suframa from '../static/images/partners/suframa.png'

export default {
  data: () => ({
    partners: [
      sebrae,
      apexBrasil,
      cniLogo,
      peiex,
      fiems,
      senac,
      dubaiChamber,
      sedesc,
      sudesco,
      ministerioDaAgricultura,
      jci,
      fecomercioDf,
      fibra,
      fieam,
      fiepi,
      suframa,
      idesam,
      sidectiAmazonas,
      semagro,
      ifmsLogo,

    ]
  })
}
</script>

<style>

</style>
