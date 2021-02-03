<template>
  <div>
    <div v-for="(el, index) in findComponents($route.params.id)" :key="index">
      <component :is="el"></component>
    </div>
  </div>
</template>

<script>
import Infrastructure1 from '~/components/bloks/infrastructure1';
import Infrastructure2 from '~/components/bloks/infrastructure2';
import Infrastructure3 from '~/components/bloks/infrastructure3';

import TableBlok from '~/components/bloks/tablecomp';
import Mainaboutsystem from '~/components/bloks/mainaboutsystem';
import ChartScreen from '~/components/bloks/chartscreen';
import TargetProject from '~/components/bloks/targetproject';
import Token1 from '~/components/bloks/token1';
import Token2 from '~/components/bloks/token2';

import Sience1 from '~/components/bloks/sience1';
import Sience2 from '~/components/bloks/sience2';
import Sience3 from '~/components/bloks/sience3'; 
import Sience4 from '~/components/bloks/sience4'; 

import Service1 from '~/components/bloks/service1';
import Service2 from '~/components/bloks/service2';
import Service3 from '~/components/bloks/service3'; 


import Devs from '~/components/bloks/devs'; 

import Vuvod from '~/components/bloks/vuvod';
import Stat from '~/components/bloks/stat.vue';
import Plan1 from '~/components/bloks/plan1';
import Plan2 from '~/components/bloks/plan2';

import Potential from '~/components/bloks/potential';

export default {
  data: ()=>({
    redirectSSR:[
      {
        slug: 'test',
        components:[
           Infrastructure1,
           Infrastructure2,
           Infrastructure3,
        ]
      },
      {
        slug: 'test1',
        components:[
           Infrastructure2,
        ]
      }
    ]
  }),
  methods:{
    findComponents(slug){
      console.log(slug);
      const checked = this.redirectSSR.find(el => el.slug == slug);
      return checked.components;
    }
  },
  components: {
    Infrastructure1,
    Infrastructure2,
    Infrastructure3,
    TableBlok,
    Mainaboutsystem,
    ChartScreen,
    TargetProject,
    Token1,
    Token2,
    Sience1,
    Sience2,
    Sience3,
    Sience4,
    Service1,
    Service2,
    Service3,
    Devs,
    Vuvod,
    Stat,
    Plan1,
    Plan2,
    Potential,
  },
  beforeCreate() {
        this.$store.dispatch('slug/changeSlug', this.$route.params.id);
        const text = this.$route.path;
        const path = text.replace(`${'/' + this.$route.params.id}`, '');
        this.$router.push ({path: `${path}`}); 
  }
}
</script>

<style>
</style>