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
            
            
            //Filter example
            /*  
            example1.items = example1.items.filter(function (item) {
              return item.message.match(/r/)
            })*/
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

  var vm = new Vue({
    el: '#demo',
    data: {
      firstName: 'Foo',
      lastName: 'Bar'
    },
    computed: {
        fullName: {
          // getter
          get: function () {
            return this.firstName + ' ' + this.lastName
          },
          // setter
          set: function (newValue) {
            var names = newValue.split(' ')
            this.firstName = names[0]
            this.lastName = names[names.length - 1]
          }
        }
      }
  })

  var example1 = new Vue({
    el: '#example-1',
    data: {
      items: [
        { message: 'Foo' },
        { message: 'Bar' },
        { message: 'Var' },
        { message: 'Test' }

      ]
    }
  })


  /// To add or change values of array using command prompt
  ////Vue.set(example2.items, 3, ({message:'Hello'}))

  var example2 = new Vue({
    el: '#example-2',
    data: {
      parentMessage:'Parentmesage',
      items: [
        { message: 'Foo' },
        { message: 'Bar' },
        { message: 'Var' },
        { message: 'Test' }

      ]
    }
  })

  var example3= new Vue({
    el: '#v-for-object',
    data: {
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  })