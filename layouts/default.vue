<template>
	<v-app dark>
		<div class="d-flex justify-center mt-16">
			<UToolbar />
		</div>
		<Nuxt class="mt-0" />
	</v-app>
</template>

<script>
	import UToolbar from '~/components/UToolbar'

	export default {
		components: {
			UToolbar,
		},
		data() {
			return {}
		},
	}
</script>
