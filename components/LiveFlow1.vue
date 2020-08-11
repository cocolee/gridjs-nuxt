<template>
  <div class="c-live-flow-table">
    <client-only>
      <grid
        :cols="cols"
        :rows="rows"
        :auto-width="false"
        theme="none"
        :pagination="pagination"
      ></grid>
    </client-only>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { html } from 'gridjs'
export default {
  components: {},
  fetch() {
    this.marketSummaries.forEach((summary) => {
      // this.rows.push({
      //   marketSymbol: summary.ToSymbol,
      //   marketName: summary.Name,
      //   marketHistory: summary.History,
      //   marketPrice: summary.Price,
      //   marketLowDay: summary.LowDay,
      //   marketHighDay: summary.HighDay,
      //   marketdailyChange: summary.dailyChange,
      //   marketdailyVolume: summary.dailyVolume
      // })
      this.rows.push([
        summary.ToSymbol,
        summary.Name,
        summary.History,
        summary.Price,
        summary.LowDay,
        summary.HighDay,
        summary.dailyChange,
        summary.dailyVolume,
      ])
    })
  },
  data() {
    return {
      cols: [
        {
          id: 'marketSymbol',
          // eslint-disable-next-line no-undef
          name: html('SYMBOL'),
          sort: {
            enabled: true,
          },
        },
        {
          id: 'marketName',
          name: 'Name',
        },
        {
          id: 'marketHistory',
          name: 'PRICE GRAPH',
        },
        {
          id: 'marketPrice',
          name: 'Live Price',
        },
        {
          id: 'marketLowDay',
          name: 'LOWEST PRICE(24h)',
        },
        {
          id: 'marketHighDay',
          name: 'HIGHEST PRICE(24h)',
        },
        {
          id: 'marketdailyChange',
          name: '24h Change',
        },
        {
          id: 'marketdailyVolume',
          name: '24h Volume',
        },
      ],
      rows: [],
      pagination: {
        limit: 10,
      },
    }
  },
  computed: {
    ...mapGetters({
      marketSummaries: 'marketSummaries',
    }),
  },
  created() {
    // console.log('this.marketSummaries created', this.marketSummaries)
  },
}
</script>
