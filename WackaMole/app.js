var app = new Vue({
        el: "#app",
        data: {
                rows: 5,
                columns: 5,
                moleRow : -1,
                moleColumn : -1,
                score: 0,
                total: 0,
        },
        methods: {
            updateMoleRecursive: function () {
                this.total = 0;
                var UpdateIntervalID = setInterval(() =>{
                    this.moleRow = Math.ceil(Math.random() * this.rows);
                    this.moleColumn = Math.ceil(Math.random() *this.columns);
                    this.total++;
                    if (this.total >= 10){
                        setTimeout(() => {
                            this.moleRow = -1;
                            this.moleColumn = -1;
                        },1000);
                        clearInterval(UpdateIntervalID);
                    }
            },1000);
            },

            hitMole: function(){
                this.score++;
                this.moleRow = -1;
                this.moleColumn = -1;
            }
            },
            created: function() {
                this.updateMoleRecursive();
        }
});

            // row count and column count
            //// mole position (row and column)
            //// score and total
            //},
            //methods: {
            //  updateMoleRecursive: function () {
            //  // use SetTimeout to 
            //  // 1. change the mole's position
            //  // 2. update the total
            // },
            //  hitMole: function () {
            //  // 1. add 1 to the score
            //  // 2. clear the mole off the board
            // }
            // },
            // created: function () {
            // // Call Recursive function to start
            //       }
            //   });
