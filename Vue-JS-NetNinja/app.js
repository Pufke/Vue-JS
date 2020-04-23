new Vue({
    el: '#vue-app', //# because it is id of div
    data: {
        name: 'Nemanja',
        job : 'Programer',
        website: 'http://www.thenetninja.co.uk',
        websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja</a>'
    },
    methods: {
        greet: function(time){
            return 'Good' + ' ' + time + ' ' + this.name;
        }
    }
});