var vm = new Vue({
    el: '#example',
    data: {
        msg: 'the world',
        seen:false
    },
        created: function () {
            // `this` points to the vm instance
            console.log('seen is: ' +this.seen)
          },
        methods: {
            reverseMessage: function () {
              this.msg = this.msg.split('').reverse().join(''),
            this.seen=!this.seen
    }
        },
     

})
vm.$watch('seen', function (newValue, oldValue) {
    // This callback will be called when `vm.a` changes
    console.log('seen is: ' +this.seen)
  })
var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString(),
    }
  })


  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  })