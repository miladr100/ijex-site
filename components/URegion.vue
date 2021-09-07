<template>
  <v-container class="pa-4 text-center">
    <v-row class="fill-height" align="center" justify="center">
      <template v-for="(region, i) in regions">
        <v-tooltip :key="i" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-col :key="i" cols="12" md="4" sm="8" v-bind="attrs" v-on="on" >
              <v-hover v-slot="{ hover }">
                <div :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
                  <div
                    :class="{ 'show-btns align-self-center': hover }"
                    style="visibility: hidden"
                  >
                    <h3 :class="{ 'show-btns': hover }" :color="transparent">
                      {{ $t(`CORE.regions.${region.name}`) }}
                    </h3>
                  </div>
                  <v-img class="img-hover" :src="region.img" max-height="400px" max-width="400" >

                  </v-img>
                </div>
              </v-hover>
            </v-col>
          </template>
          <span>{{ $t(`CORE.view_more`) }}</span>
        </v-tooltip>
      </template>
    </v-row>
  </v-container>
</template>


<script>
import norte from '~/static/images/regions/norte.png'
import nordeste from '~/static/images/regions/nordeste.png'
import sudeste from '~/static/images/regions/sudeste.png'
import centroOeste from '~/static/images/regions/centro_oeste.png'
import sul from '~/static/images/regions/sul.png'

export default {
  data: () => ({
    sul,
    regions: [
      {
        name: 'north',
        img: norte,
      },
      {
        name: 'northeast',
        img: nordeste,
      },
      {
        name: 'southeast',
        img: sudeste,
      },
      {
        name: 'midwest',
        img: centroOeste,
      },
      {
        name: 'south',
        img: sul,
      },
    ],
    transparent: 'rgba(255, 255, 255, 0)',
  }),
}
</script>

<style scoped>
.img-hover {
  transition: opacity 0.4s ease-in-out;
}

.img-hover:hover {
  opacity: 0.8;
  cursor: pointer;
}

.show-btns {
  visibility: visible;
}
.show-btns > h3 {
  color: black;
}
</style>