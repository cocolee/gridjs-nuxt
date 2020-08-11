<template>
  <div class="c-live-flow-table">
    <client-only>
      <grid :cols="cols" :rows="rows" :auto-width="false" theme="none"></grid>
    </client-only>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { html } from 'gridjs'
export default {
  components: {},
  data() {
    return {
      cols: [
        {
          id: 'ToSymbol',
          name: html('SYMBOL'),
          sort: {
            enabled: true,
          },
        },
        {
          id: 'FullName',
          name: 'Name',
        },
        {
          id: 'History',
          name: 'PRICE GRAPH',
          // formatter: (cell) => {
          //   if (cell.length > 0) {
          //     // eslint-disable-next-line no-console
          //     console.warn('Price Graph', cell)
          //     const current = this.$gridjs.uuid()
          //     this.$gridjs.render(`[data-ref="${current}"]`, MiniChart, {
          //       chartData: cell
          //     })
          //     return this.$gridjs.html(`<div data-ref="${current}"></div>`)
          //   }
          // }
        },
        {
          id: 'Price',
          name: 'Live Price',
        },
        {
          id: 'LowDay',
          name: 'LOWEST PRICE(24h)',
        },
        {
          id: 'HighDay',
          name: 'HIGHEST PRICE(24h)',
        },
        {
          id: 'dailyChange',
          name: '24h Change',
        },
        {
          id: 'dailyVolume',
          name: '24h Volume',
        },
      ],
      rows: [],
    }
  },
  computed: {
    ...mapGetters({
      marketSummaries: 'marketSummaries',
    }),
  },
  created() {
    this.rows = this.marketSummaries
    // console.log('this.marketSummaries created', this.marketSummaries)
  },
}
</script>
