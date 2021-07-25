export default {
  install (Vue) {
    Vue.mixin({
      mounted () {
      },
      data () {
        return {
        }
      },
      computed: {
      },
      methods: {
        getAvg (value, target, toFixed) {
          let _toFixed = 1
          if (toFixed) {
            _toFixed = toFixed
          }
          return (value / target).toFixed(_toFixed)
        },
        getWinsRate (wins, losses) {
          return `${parseInt(wins / (wins + losses) * 100)}%`
        }
      }
    })
  }
}
