<template>
  <div class="footer__wrapper">
    <div class="footer__container">
       <div class="footer__container-content">
        <client-only>
         <carousel v-bind="options">
            <slide>
              <div class="footer__slide-container">
                <img src="~assets/img/footer/slide1.jpg" alt="Presentaintion Bitbon System">
                <div class="footer__slide-text">Обзор проекта Система Bitbon</div>
              </div>
            </slide>
            <slide>
              <div class="footer__slide-container">
                Slide 2 Content
              </div>
            </slide>
            <slide>
              <div class="footer__slide-container">
                Slide 3 Content
              </div>
            </slide>
            <slide>
              <div class="footer__slide-container">
                Slide 3 Content
              </div>
            </slide>
          </carousel>
        </client-only>
       </div> 
    </div>
  </div>
</template>

<script>
export default {
  async fetch(){
    this.linkLoader = this.$store.getters['users/getlinks'];
  },
  data: () => ({
    linkLoader: [],
    options: {
        scrollPerPage: false,
        loop: true,
        perPage: 2,
        paginationEnabled: false
    }
  }),
}
</script>

<style lang="scss">
  .footer__container-content{
    width: 90vw;
    margin: auto;
    display: flex;
  }

  .footer__slide-container{
    width: calc( 90vw / 3);
    min-width: 150px;
    height: 124px;
    font-size: 13px;
    line-height: 1.23;
    color: #6e6e6e;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer__container{
   
  }

  .footer__wrapper{
    width: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(6px);
    position: fixed;
    bottom: 0;
    height: 124px;
  }

   @media (min-width: 1024px){
    .footer__wrapper{
      height: 70px;
    }
    .footer__slide-container{
      height: 70px;
    }
  }
</style>