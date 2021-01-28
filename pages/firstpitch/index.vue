<template>
  <div class="container">
    <TableBlok id="test1"></TableBlok>
    <ChartScreen id="test2"></ChartScreen>
    <TargetProject id="test3"></TargetProject>
    <Plan1 id="test"></Plan1>
    <Plan2></Plan2>

    <Potential></Potential>

    <Token1></Token1>
    <Token2></Token2>
    <Sience1></Sience1>
    <Sience2></Sience2>
    <Sience3></Sience3>
    <Sience4 id="video"></Sience4>
    <Service1></Service1>
    <Service2></Service2>
    <Service3></Service3>
    <Devs></Devs>
    <Vuvod></Vuvod>
    <Stat></Stat>
    <Mainaboutsystem></Mainaboutsystem>
    <Infrastructure1></Infrastructure1>
    <Infrastructure2 id="test"></Infrastructure2>
    <Infrastructure3></Infrastructure3>
  </div>
</template>

<script>
import Block from '~/components/Blok';
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

const VueScrollTo = require('vue-scrollto');

export default {
  data: () => ({
    lang: 'ru',
    id: [
      'test',
      'test1',
      'test2',
      'test3',
      'video',
    ],
    observer: {},
  }),
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
  methods: {
    changeLanguage(lang){
      this.lang = lang;
    },
    addHashToLocation(params) {
    history.pushState(
    {},
    null,
    this.$route.path  + '/' + encodeURIComponent(params)
    )
        console.log( this.$route.path );
  }
  },
  scrollToTop: false,
  mounted(){
    
    const targer = this.id.map(el => [el, document.querySelector(`#${el}`)]);


    targer.forEach( (el,index) => {
      this.observer[index] = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.6) {
             this.addHashToLocation(`${el[0]}`)
            }
        });
      },{threshold: [0 , 0.25, 0.5, 0.75, 1]});
      this.observer[index].observe(el[1]);
    });

    const slug = this.$store.getters['slug/getSlug'];

     if(slug !== ''){
       const distance = document.querySelector(`#${slug}`);
       console.log(distance);
       VueScrollTo.scrollTo(distance, 700);
       this.$store.dispatch('slug/changeSlug', '');
     }

  },
  destroyed(){

      for(let i = 0; i < Object.keys(this.observer).length; i++){
          this.observer[i].disconnect();
      }

  }
}

</script>

<style>

</style>

