export default {
  install (Vue) {
    Vue.mixin({
      mounted () {
      },
      data () {
        return {
        }
      },
      filters: {
        positionFilter (position) {
          switch (position.toLowerCase()) {
            case 'top': return '탑'
            case 'jng': return '정글'
            case 'mid': return '미드'
            case 'adc': return '원딜'
            case 'sub': return '서폿'
          }
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
