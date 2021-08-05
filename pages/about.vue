<template>
    <v-row >

    <v-row justify="center" align="center">
			<v-col cols="12" lg="8" md="12" sm="12">
				<v-row justify="center">
          <v-card-title class="text-h5 font-weight-medium" style="color: #194f34; text-transform: uppercase;">Sobre Nós</v-card-title>

				</v-row>
				<v-row justify="center" align="center" no-gutters>
					<v-col cols="12" lg="3" md="3" sm="6" xs="6">
						<UMemberCard :avatarSrc="avatar" :stateSrc="acre" :nameMember="nameMember" :nameState="nameState"/>
					</v-col>
				</v-row>
			</v-col>
		</v-row>







    </v-row>
</template>

<script>
import avatar from '../static/images/states/amazonas.svg'
import acre from '../static/images/states/acre.svg';
import UMemberCard from '~/components/UMemberCard';



export default {
  components: {
    UMemberCard
  },
    data: () => ({
    model: null,
    nameMember: 'Ui Sam',
    nameState: 'Mato Grosso do Sul',
    acre,
    avatar
  }),

}
</script>
