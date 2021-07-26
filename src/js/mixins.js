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
        },
        getTimeForToday (value) {
          const today = new Date()
          const timeValue = new Date(value)
          console.log(timeValue)
          const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60)
          if (betweenTime < 1) return '방금전'
          if (betweenTime < 60) {
            return `${betweenTime}분전`
          }

          const betweenTimeHour = Math.floor(betweenTime / 60)
          if (betweenTimeHour < 24) {
            return `${betweenTimeHour}시간전`
          }

          const betweenTimeDay = Math.floor(betweenTime / 60 / 24)
          if (betweenTimeDay < 365) {
            return `${betweenTimeDay}일전`
          }

          return `${Math.floor(betweenTimeDay / 365)}년전`
        }
      }
    })
  }
}
