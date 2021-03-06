const URL = "https://cs2022-eight-ball.herokuapp.com";

var app = new Vue({
    el: "#app",
    data: {
        prompt: "Ask a Question",
        message: "",
        answerReady: true,
        //messageBank: [
        //    "Yes",
        //    "No",
        //    "Maybe",
        //    "Ask Again Tomorrow",
        //    "Probably",
        //    "Probably Not"
        //],

        question: "",
    },
    methods:{
        askQuestion: function() {
            if (!this.isValidQuestion()) {return;}
            //let nextIndex = Math.floor(Math.random() * this.messageBank.length);
            //let nextResponse = this.messageBank[nextIndex];
            this.messageColor = "rgba(255,255,255,0)";
            this.answerReady = false;
            setTimeout(()=>{
                fetch(URL + "/questions").then((response)=>{
                    response.json().then((data)=>{
                        console.log(data);
                        let answerObject = data;
                        this.message = answerObject.answer;
                        this.messageColor = answerObject.color;
                        setTimeout(() =>{
                            this.answerReady = true;
                        },1000);
                        this.$forceUpdate();
                    });
                });
            },1500);
            //this.message = nextResponse;
            this.prompt = "Ask another Question";
            this.question = "";
        },
        isValidQuestion: function (){
            return this.question[this.question.length-1] == "?";
        }
    }
})
