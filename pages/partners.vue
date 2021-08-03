<template>
	<div>
		<v-row v-if="loadingScreen" class="mt-16">
			<v-col class="d-flex justify-center align-center mt-16">
				<v-progress-circular class="mt-16" indeterminate :size="80" color="teal"></v-progress-circular>
			</v-col>
		</v-row>
		<v-row v-else justify="center" align="center">
			<v-col cols="12" lg="8" md="12" sm="12">
				<v-row justify="center">
					<v-card-title class="text-h5 font-weight-medium" style="color: #194f34; text-transform: uppercase;">{{$t('PARTNERS.title')}}</v-card-title>
				</v-row>
				<v-row justify="center" align="center" no-gutters>
					<v-col cols="12" lg="3" md="3" sm="6" xs="6" v-for="partner in partners" :key="partner">
						<v-card tile elevation="0">
							<v-img v-if="xsOnly" class="mx-16 my-8" :src="partner"></v-img>
							<v-img v-else class="mx-11" :src="partner"></v-img>
						</v-card>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
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
				fiems,
				fibra,
				fieam,
				fiepi,
				sudesco,
				dubaiChamber,
				ministerioDaAgricultura,
				semagro,
				fecomercioDf,
				apexBrasil,
				cniLogo,
				peiex,
				sebrae,
				senac,

				sedesc,

				jci,

				suframa,
				idesam,
				sidectiAmazonas,

				ifmsLogo,
			],
		}),
		computed: {
			xsOnly() {
				return this.$vuetify.breakpoint.xsOnly
			},
			loadingScreen() {
				return this.$store.getters.getStateLoadingScreen
			},
		},
		mounted() {
			this.$store.dispatch('setLoadingScreen', 2000)
		},
	}
</script>

<style>
</style>
