Vue.component('custom-address', {
    template: `<div><b>{{addressObject.name}}</b>
                <br>
                    {{addressObject.address}}
                </div>`,
    props: {
        "addressObject": Object,
    }
    //[]   // or {}
})

var app = new Vue({
    el: "#app",
    data: {
        // variables to model each input
        Place: "",
        Name: "",
        let Address: {name:this.Name, address:this.Place},
        // list to hold addresses
        Addresses: [],
    },
    methods: {
        // function to push address into list, clear input fields
        addAddress: function(){
            this.Addresses.push(this.Address);
            this.Place = "";
            this.Name = "";
            return;
        },
    }
})
