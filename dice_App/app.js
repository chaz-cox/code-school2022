var app = new Vue({
        el: '#app',
        data: {
            // input for new dice sides
            sidesInput = "",
    
            // array to hold dice
            dice = [],
        },
        methods: {
            // create new die, push it to our dice array
            addDie: function () {
                die = {
                    sides: this.sidesInput,
                    value: this.sidesInput
                }
                this.dice.push(die);
            },
            // use setInterval, as well as a counter variable (ie. i = 0), to get a random value for the die.
            //   After the counter variable reaches a stopping point (ie. i >= 20), clear the interval.
            rollDie: function (index) {
                let i = 0;
                let currentDie = this.dice(index)
                let intervalID = setInterval(()=>{
                   currentDie.value = Math.ceil(math.random()*currentDie.sides); 
                })
            },
            // use the array.splice function to delete the dice at the given index
            deleteDie: function (index) {
    
            },
            // similar to rolling a single die, but start a setInterval for each die. 
            //   Each interval stopping point (ie. 20) should be more than the previous (ie. 20, 40, 60, ...)
            rollAllDice: function () {
    
            }
        }
    })
