<template>
  <div class="container">
    <TableBlok id="clear1"></TableBlok>
    <ChartScreen></ChartScreen>
    <TargetProject></TargetProject>
    <Token1></Token1>
    <Token2></Token2>
    <Sience1></Sience1>
    <Sience2></Sience2>
    <Sience3></Sience3>
    <Service1></Service1>
    <Service2></Service2>
    <Service3></Service3>
    <Mainaboutsystem id="clear2"></Mainaboutsystem>
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

import Service1 from '~/components/bloks/service1';
import Service2 from '~/components/bloks/service2';
import Service3 from '~/components/bloks/service3'; 

const VueScrollTo = require('vue-scrollto');

export default {
  data: () => ({
    lang: 'ru',
    test: false,
    id: [
      'clear1',
      'test1',
      'clear2',
      'test',
    ]
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
    Service1,
    Service2,
    Service3,
  },
  methods: {
    changeLanguage(lang){
      this.lang = lang;
    },
    /*addHashToLocation(params) {
    history.pushState(
    {},
    null,
    this.$route.path  + '/' + encodeURIComponent(params)
  )
  }*/
  },
  scrollToTop: false,
    mounted(){
    /*
    const targer = this.id.map(el => [el, document.querySelector(`#${el}`)]);


    targer.forEach( el => {
      let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0.6) {
            this.addHashToLocation(`${el[0]}`)
          }
        });
      },{threshold: 0.6});
      observer.observe(el[1]);
    },)



  


    const slug = this.$store.getters['slug/getSlug'];
     if(slug !== ''){
       const distance = document.querySelector(`#${slug}`);
       console.log(distance);
       VueScrollTo.scrollTo(distance, 0);
       this.$store.dispatch('slug/changeSlug', '');
     }
*/
  }
}

</script>

<style>

</style>

