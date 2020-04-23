new Vue({
    el: '#vue-app', //# because it is id of div
    data: {
        name: 'Nemanja',
        job : 'Programer'
    },
    methods: {
        greet: function(time){
           
            return 'Good' + ' ' + time + ' ' + this.name;
        }
    }
});