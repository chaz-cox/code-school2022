var app = new Vue({
        el: "#app",
        data: {
            EnterName : "",
            EnterAddress : "",
            people : [],
        },
    methods: {
        recordAddress : function () {
            let newAddress = {
                name: this.EnterName,
                address: this.EnterAddress
            },
            this.people.push(newAddress),
            this.EnterName = "",
            this.EnterAddress=""
        }
    }
})
               //
                    // variables to model each input
            //
            //         // list to hold addresses
            //             },
            //                 methods: {
            //                         // function to add(push) address into list, clear input fields
            //                                 recordAddress: function () {
            //                                             
            //                                                     }
            //                                                         }
            //                                                         })
