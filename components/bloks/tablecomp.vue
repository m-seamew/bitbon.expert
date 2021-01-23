<template>
   <Blok :slide_id="2" :footer_show="false">
    <article>
      <main>
        <div class="main__container">
          <div class="note tablecomp__note--position">
            {{$t('tablecomp.note')}}
          </div>
          <div class="tablecomp__chapter tablecomp__chapter--beforetable" v-html="$t('tablecomp.chapter')"></div>
        </div>
        <div class="tablecomp__table">
          <div class="tablecomp__table-column tablecomp__table-column--left">
            <div class="tablecomp__text--left">
              <h3 class="tablecomp__table-column-header" v-html="$t('tablecomp.column_left.title')"></h3>
                <ul v-for="(el, index) in tablePoint($t('tablecomp.column_left.points'))" :key="index">
                  <li class="table__point">
                    <div class="table__point-header" v-html="el.title"></div>
                    <div v-if="el.descr != 'bitbonPrice'" class="table__point-text" v-html="el.descr"></div>
                    <div v-else class="table__point-text">{{bitbonPrice}}</div>
                  </li>
                </ul>
                <div class="table__comment" v-html="$t('tablecomp.column_left.comment')"/>
            </div>
          </div>
          <div class="tablecomp__table-column tablecomp__table-column--right">
            <div class="tablecomp__text--right">
              <div class="tablecomp__table-column-header"  v-html="$t('tablecomp.column_right.title')"></div>
               <ul v-for="(el, index) in tablePoint($t('tablecomp.column_right.points'))" :key="index">
                  <li class="table__point">
                    <div class="table__point-header" v-html="el.title"></div>
                    <div class="table__point-text" v-html="el.descr"></div>
                  </li>
                </ul>
            </div>  
          </div>
        </div>
      </main>
    </article>
   </Blok>
</template>

<script>
export default {
  async fetch(){
    this.bitbonPrice = this.$store.getters['bitbon/getPrice'];
  },
  data: () => ({
    bitbonPrice: 0,
  }),
  methods:{
    tablePoint(objData){
      const data = [];
      for(let i = 0; i < Object.keys(objData).length; i++){
        data.push(objData[i]);
      }
      return data;
    }
  }
}
</script>

<style lang="scss">
  @import '~/assets/scss/variables';

  .tablecomp__chapter--beforetable{
    padding-bottom: Max(10px, 3%);
  }

  .tablecomp__note--position{
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .tablecomp__table{
    display: flex;
    height: auto;
  }

  .table__point-header{
    position: relative;
  }

  @media (max-width: 1023px){
    .tablecomp__table-column{
      padding-bottom: 20px;
    }
  }
  @media (min-width: 1025px){
    .tablecomp__table{
      height: 1080px;
    } 
  }

  .tablecomp__table-column{
    flex: 0 0 45%
  }
  .tablecomp__table-column-header{
    font-size: $headerFontSize;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 11%;
    padding-bottom: 6.3%;
  }
  .tablecomp__table-column--left{
    padding-left: 5%;
    background-color:rgba($color: #ffee00, $alpha: 0.35);
    
  }
  .tablecomp__table-column--right{
    padding-right: 5%;
  }

  .tablecomp__text--left{
    margin-right: 4.5%;
  }
  .tablecomp__text--right{
    margin-left: 4.5%;
  }

  .table__point-text{
    font-weight: 700;
    margin-top: Max(5px, 2.25%);
  }

  .table__point:not(:first-child){
    margin-top: Max(5px, 2.25%);
  }

  .table__comment{
    opacity: 0.6;
    line-height: 1.1;
    font-size: 0.74em;
    margin-top: 4%;
    margin-bottom: 13.5%;
    font-weight: 700;
  }
</style>

<i18n locale="ru" src="~/assets/lang/tablecomp/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/tablecomp/en.json"></i18n>