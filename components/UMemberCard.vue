<template>
	<v-card align="center" elevation="0" >
		<v-row align="center">
			<v-col align-self="start" cols="12">
				<h3 v-if="position == 'top'">{{ memberRole }}</h3>
			</v-col>
			<v-col align-self="start" cols="12">
				<v-avatar class="profile" size="150">
					<v-img :src="avatarSrc"></v-img>
				</v-avatar>
			</v-col>
			<v-col class="py-0" cols="12">
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title style="color: black" class="text-h6">
							{{ nameMember }}
						</v-list-item-title>
						<v-list-item-subtitle v-if="position == 'bottom'" style="color: black; word-break: break-word; white-space: normal;">{{memberRole}}</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</v-col>
			<v-row>
				<v-col v-if="stateImg" cols="12">
					<v-img max-height="80" max-width="40" :src="stateImg"></v-img>
				</v-col>
				<v-col>
					<h3>{{ nameState }}</h3>
				</v-col>
			</v-row>
		</v-row>
	</v-card>
</template>

<script>
	export default {
		props: {
			nameMember: {
				type: String,
				default: '',
				require: true,
			},
			avatarSrc: {
				type: String,
				default: '',
				require: true,
			},
			nameState: {
				type: String,
				default: '',
				require: true,
			},
			stateImg: {
				type: String,
				default: '',
				require: false,
			},
      		memberRole: {
        		type: String,
				default: '',
				require: true,
      		},
			position: {
        		type: String,
				default: '',
				require: true,
      		}
		},
	}
</script>
