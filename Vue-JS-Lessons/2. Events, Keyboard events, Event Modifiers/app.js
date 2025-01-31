new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        add: function(inc){
            this.age += inc;
        },
        substract: function(dec){
            this.age -= dec;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY; 
        },
        logName: function(){
            console.log("You entered your name");
        },
        logAge: function(){
            console.log("You entered your age");
        }
    }
});