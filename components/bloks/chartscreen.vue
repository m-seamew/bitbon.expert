<template>
  <Blok :slide_id="3" :title="$t('chart_screen.title')" :footer_show="false">
    <div class="main__container">
      <div class="div chart_screen__chapter" v-html="$t('chart_screen.chapter_1.text')"></div>
    </div>  
    <client-only>
          <img class="bg-icon chart_screen__bg-icon" src="~assets/img/chartscreen/bgicon.svg" alt="bgicon">
    </client-only>
    <div id="chart"></div>
    <div class="main__container">
      <Subnotes :text="$t('chart_screen.subnotes')" :MaxWidth="60"></Subnotes>
    </div>  
  </Blok>
</template>

<script>
import { Chart } from "frappe-charts/dist/frappe-charts.min.esm"

export default {
  data: ()=>({
    chart: {},
  }),
  mounted(){
    const data = {
    labels: ["13 марта 2017", "13 марта 2017", "13 марта 2017", "13 марта 2017", ' '],
    datasets: [
        {
            name: "Собрано млн", type: "bar",
            values: [0, 20.8, 52.4, 88.4, 100]
        }
    ],
    yMarkers: [
        {   label: '',
            value: 20.8,
            options: { labelPos: 'left' } // default: 'right'
        },
        {   label: '',
            value: 52.4,
            options: { labelPos: 'left' } // default: 'right'
        },
        {   label: '',
            value: 88.4,
            options: { labelPos: 'left' } // default: 'right'
        },
    ],
    yRegions: [{ label: "Region", start: 0, end: 50 }],
  
    }
    this.chart = new Chart("#chart", {  // or a DOM element,
                                            // new Chart() in case of ES6 module with above usage
    title: "",
    data: data,
    type: 'axis-mixed', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
    height: 350,
    colors: ['#7596e2'],
    amimate: true,
})
  }
}
</script>

<style lang="scss">
  .chart_screen__bg-icon{
    width: 27%;
    margin-top: -7%;
    margin-right: -1%;
  }

  .frappe-chart .y.axis .line-horizontal {
    display: none;
  }
</style>

<i18n locale="ru" src="~/assets/lang/chartscreen/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/chartscreen/en.json"></i18n>