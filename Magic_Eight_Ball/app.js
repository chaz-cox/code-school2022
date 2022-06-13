var app = new Vue({
    el: "#app",
    data: {
        prompt: "Ask a Question",
        message: "",
        messageBank: [
            "Yes",
            "No",
            "Maybe",
            "Ask Again Tomorrow",
            "Probably",
            "Probably Not"
        ],

        question: "",
    },
    methods:{
        askQuestion: function() {
            if (!this.isValidQuestion()) {return;}
            let nextIndex = Math.floor(Math.random() * this.messageBank.length);
            let nextResponse = this.messageBank[nextIndex];
            this.message = nextResponse;
            this.prompt = "Ask another Question";
            this.question = "";
        },
        isValidQuestion: function (){
            return this.question[this.question.length-1] == "?";
        }
    }
})
