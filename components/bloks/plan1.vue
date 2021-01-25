<template>
  <Blok :slide_id="24" :title="$t('stat.title')" :subtitle="$t('stat.subtitle')" :footer_show="false">
    <article>
    <client-only>
        <img class="bg-icon stat__bg-icon" src="~assets/img/stat/bgicon.png" alt="">
        <Observer @firstobserve="animation"></Observer>
    </client-only>
    <main class="main__container vuvod__main-container">
      <div class="plan__blok">
        <div class="plan__block-left">
          <div class="header--rotate">2020</div>
        </div>
        <div class="plan__block-right">
          sfdsfsdfsfsf
        </div>

      </div>
      <div class="plan__blok">
        <div class="plan__block-left">
          <div class="header--rotate">2020</div>
        </div>
        <div class="plan__block-right">
          sfdsfsdfsfsf
        </div>

      </div>
      <div class="plan__blok">
        <div class="plan__block-left">
          <div class="header--rotate">2020</div>
        </div>
        <div class="plan__block-right">
          sfdsfsdfsfsf
        </div>

      </div>
    </main>   
    </article>  
  </Blok>
</template> 

<script>
import observer from './observer.vue';
import AnimatedNumber from "animated-number-vue";

export default {
  components: { observer,  AnimatedNumber },
   data: () => ({
     value: [],
     tempValue: []
   }),
   async fetch(){
     this.curPrice = await this.$store.getters['bitbon/getPrice'];
   },
   methods: {
     animation(){
       const list = this.$t('stat.list');
        for(let i = 0; i < Object.keys(list).length; i++){
        this.tempValue[i] = Number(list[i].amount);
        }
        setTimeout(() => {this.value = this.tempValue}, 0);
     },
     formatToPrice(value) {
      return `<h3 class="stat__num--big">${'&nbsp;' + Number(value).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>`; 
    },
    tablePoint(objData){
      const data = [];
      for(let i = 0; i < Object.keys(objData).length; i++){
        data.push(objData[i]);
      }
      return data;
    },
   },
   beforeMount(){
     const list = this.$t('stat.list');
     for(let i = 0; i < Object.keys(list).length; i++){
        this.value.push(0);
     }
   }
}
</script>

<style lang="scss">
  @import '~/assets/scss/variables';

  .plan__blok{
    display: flex;
    justify-content: space-between;
    height: 300px;
    flex: 0 0 5%;
  }

  .plan__block-left{
    height: inherit;
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .plan__blok--right{
    flex: 0 0 70%;
    height: inherit;
  }

  .header--rotate{
    transform: rotate(-90deg);
    font-weight: 700;
    font-size: $fontOfStatList;
    width: 100%;
  }
  

  .plan__blok:not(:last-child) .plan__block-left .header--rotate::before{
    content: '';
    position: absolute;
    border-bottom: 3px dotted #bbbbbb;
    width: 100%;
    top: 50%;
    right: 100%;
    transform: translate(-5px, -50%);
    width: 1080px;
    pointer-events: none;
  }

  .plan__blok:not(:first-child) .plan__block-left .header--rotate::after{
    content: '';
    position: absolute;
    border-bottom: 3px dotted #bbbbbb;
    width: 100%;
    top: 50%;
    left: 100%;
    transform: translate(5px, -50%);
    width: 1080px;
    pointer-events: none;
  }
///////////////////


</style>


<i18n locale="ru" src="~/assets/lang/stat/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/stat/en.json"></i18n>