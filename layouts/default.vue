<template>
  <div>
    <Header :bitbonprice="bitbonPrice"></Header>
    <Nuxt :bitbonprice="bitbonPrice"/>
    <!--<Footer></Footer>-->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  async fetch(){
    await axios
          .get('https://bc-api.bit.trade/api/price?currency=usd')
          .then(res => {
            this.bitbonPrice = res.data;
            this.$store.dispatch('bitbon/changePrice', res.data)
          })
          .catch(err => console.log(err));
  },
  data: () => ({
    bitbonPrice: 0,
  }),
  mounted(){
    const myScreenOrientation = window.screen.orientation;
    myScreenOrientation.lock("portrait"); 
  }
}
</script>

<style lang="scss">
  @import '~/assets/scss/variables';
  html{
    background-color: $bgdefault;
    line-height: $mainLineHeight;
    font-family: $mainFont;
    font-size: $mainFontSize;
    color: $mainFontColor;
    height: 100%;
    
    @media screen and (max-width: $desktopWidth) {
      font-size: 16px;
    }
    @media screen and (max-width: $tableWidth) {
      font-size: 15px;
    }
    @media screen and (max-width: $phoneWidth) {
      font-size: 14px;
    }
  }
</style>

