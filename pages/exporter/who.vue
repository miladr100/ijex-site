<template>
  <v-row>
    <v-row v-if="loadingScreen" justify="center" align="center">
			<v-progress-circular indeterminate :size="80" color="teal"></v-progress-circular>
		</v-row>
    <v-row v-else align="center" justify="center" class="mx-4">
      <v-col cols="12" lg="8" md="8">
        <v-row justify="center">
          <v-col  align="center" justify="center" cols="12"><h2>{{$t('WHO.general_board')}}</h2></v-col>
          <v-col v-for="member in members" :key="member.name">
            <UMemberCard
              :avatar-src="member.profileImg"
              :state-img="member.stateImg"
              :name-member="member.name"
              :name-state="member.stateAcronym"
              :member-role="$t(`WHO.card_member.${member.role}`)"
              :position="member.position"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import UMemberCard from '~/components/UMemberCard';

import adailtonJunior from '~/static/images/directors/adailton_junior.png';
import alineVergne from '~/static/images/directors/aline-vergne.png';
import bernhardSmid from '~/static/images/directors/bernhard_smid.png';
import charmaineAlve from '~/static/images/directors/charmaine_alve.png';
import danielSantos from '~/static/images/directors/daniel_santos.png';
import deniseBraga from '~/static/images/directors/denise_braga.png';
import felipeGuida from '~/static/images/directors/felipe_guida.png';
import kelianeCristine from '~/static/images/directors/keliane cristine.png';
import mariaPongue from '~/static/images/directors/maria_pongue.png';
import ronanPires from '~/static/images/directors/ronan_pires.jpg';

import distritoFederal from '~/static/images/states/distrito_federal_brasil.svg';
import saoPaulo from '~/static/images/states/sao_paulo.svg';
import matoGrossoDoSul from '~/static/images/states/mato_grosso_do_sul.svg';
import rioGrandeDoNorte from '~/static/images/states/rio_grande_do_norte.svg';
import amazonas from '~/static/images/states/amazonas.svg';
import bandeiraAngola from '~/static/images/states/flag_of_angola.svg';

export default {
  components: {
    UMemberCard,
  },
  data () {
    return {
      members: [
        {
          name: "Ronan Pires",
          profileImg: ronanPires,
          stateImg: distritoFederal,
          stateAcronym: 'DF',
          role: 'president',
          position: 'bottom'
        },
        {
          name: "Bernhard j. Smid",
          profileImg: bernhardSmid,
          stateImg: distritoFederal,
          stateAcronym: 'DF',
          role: 'institutional_relations',
          position: 'bottom'

        },
        {
          name: "Denise Braga",
          profileImg: deniseBraga,
          stateImg: saoPaulo,
          stateAcronym: 'SP',
          role: 'content_director',
          position: 'bottom'

        },
        {
          name: "Charmaine Alve",
          profileImg: charmaineAlve,
          stateImg: matoGrossoDoSul,
          stateAcronym: 'MS',
          role: 'technical_director',
          position: 'bottom'

        },
        {
          name: "Felipe Guida Gouveia",
          profileImg: felipeGuida,
          stateImg: rioGrandeDoNorte,
          stateAcronym: 'RN',
          role: 'ceo',
          position: 'bottom'

        },
        {
          name: "Adailton Júnior",
          profileImg: adailtonJunior,
          stateImg: distritoFederal,
          stateAcronym: 'DF',
          role: 'administrative_financial_director',
          position: 'bottom'

        },
        {
          name: "Aline Vergne",
          profileImg: alineVergne,
          stateImg: distritoFederal,
          stateAcronym: 'DF',
          role: 'legal_board',
          position: 'bottom'

        },
        {
          name: "Maria Pongue",
          profileImg: mariaPongue,
          stateImg: bandeiraAngola,
          stateAcronym: 'Angola',
          role: 'cplp_Board',
          position: 'bottom'

        },
        {
          name: "Daniel Santos",
          profileImg: danielSantos,
          stateImg: amazonas,
          stateAcronym: 'AM',
          role: 'strategic_projects_board',
          position: 'bottom'

        },
        {
          name: "Keliane Cristina",
          profileImg: kelianeCristine,
          stateImg: distritoFederal,
          stateAcronym: 'DF',
          role: 'executive_secretary',
          position: 'bottom'

        },
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
    },
    xsOnly() {
      return this.$vuetify.breakpoint.xsOnly
    },
    loadingScreen() {
      return this.$store.getters.getStateLoadingScreen
    },
  },
  mounted() {
    this.$store.dispatch('setLoadingScreen', 1000)
  },
}
</script>
