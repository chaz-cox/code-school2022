    Vue.component('button-counter',
        {// use dashes for name
        data: function (){
            return{
                count: 0,
                color: "red",
            }
        },
            props:[
                "name"
            ],
            template: '<button v-on:click="count++">{{count}} Increase Counter  {{name}}</button>'
    }//must be in one thing so if you add more html add a div around it and use backtics for multiple lines
);

var app = new Vue({
        el: "#app",
        data: {
            button_name: "component_button",
        },
})
