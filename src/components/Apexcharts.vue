<template>
  <apexchart type="pie"  :options="chartOptions" :series="series"></apexchart>
</template>
  
<script>
export default {
  name: 'Apexcharts',
  components: {
  },
  data() {
    return {
      series: [44, 55, 13, 43, 22],
      chartOptions: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
      },
    }
  }
}
</script>
  