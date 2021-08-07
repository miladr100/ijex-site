<template>
    <v-row >

    <v-row justify="center" align="center">
			<v-col cols="12" lg="8" md="12" sm="12">
				<v-row justify="center">
          <v-card-title class="text-h5 font-weight-medium" style="color: #194f34; text-transform: uppercase;">Sobre Nós</v-card-title>

				</v-row>
				<v-row justify="center" align="center" no-gutters>
					<v-col cols="12" lg="3" md="3" sm="6" xs="6">
						<UMemberCard :avatarSrc="naruto" :stateSrc="acre" :nameMember="nameMember" :nameState="nameState"/>
					</v-col>
          <v-col>
            <UDescriptionMemberCard :avatarSrc="naruto" role="Programador" :nameMember="nameMember" :phonePrimary="phone1" :phoneSecondary="phone2" :email="email"/>
          </v-col>
				</v-row>

			</v-col>
		</v-row>







    </v-row>
</template>

<script>
import acre from '../static/images/states/acre.svg';
import naruto from '../static/images/teste/narutin.jpg';
import UMemberCard from '~/components/UMemberCard';
import UDescriptionMemberCard from '~/components/UDescriptionMemberCard';



export default {
  components: {
    UMemberCard,
    UDescriptionMemberCard
  },
    data: () => ({
    model: null,
    nameMember: 'Ui Sam',
    nameState: 'Mato Grosso do Sul',
    phone1: '+55 67 99899 9999',
    phone2: '+55 67 99899 8888',
    email: 'uisam@gmail.com',
    acre,
    naruto,
  }),

}
</script>
