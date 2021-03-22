Vue.component('card', {
    template: '#card',
    methods: {
      toggle() {
        this.showSection = !this.showSection
      }
    },
    data() {
      return {
        showSection: true,
        toggleIcon: '+'
      }
    }
  })
  
  var app = new Vue({
    el: '#app',
    data: {
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg'
    }
  })

  new Vue({
    el: '#model',
    data: {
      checkedNames: [],
      checked:'',
      message:'',
      picked:'',
      selected:''
    }
  })