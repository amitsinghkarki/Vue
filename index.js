Vue.component('card', {
  props: {
    toggleName: ''
  },
  template: '#card',
 
  methods: {
    toggle() {
     this.showSection = !this.showSection
    }
  },
  data() {
    return {
      showSection: false, // Flag to show section
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg',
      toggleIcon: '+'
      }
  }
})



// you can invoke methods in JavaScript too
//example2.greet() // => 'Hello Vue.js!'




var app = new Vue({
  el: '#app',
  data: {
    checkedNames: [],
    checked:'',
    message:'',
    picked:'',
    selected  : '',

    selected1: '{Please Select}',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ],
    name: 'Amit Singh Karki',
    counter: 0,
    imageUrl: 'https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg'
  },
  methods: {
    say: function (message) {
      alert(message)
    },
    warn: function (message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault()
      }
      alert(message)
    },
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
  
})