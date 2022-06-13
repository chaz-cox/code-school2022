var app = new Vue({
    el: "#app",
    data: {
        message : "Hello, vue!", //this needs to match with the html
        showText: true,
        items: [
            {text: "item a", show: true, color:"#1f2"},
            {text: "item b", show: true, color:"#500"},
            {text: "item c", show: true, color:"#564"},
            {text: "item d", show: true, color:"#58f"},
        ],
        strings: [
            "a",
            "b",
            "c",
            "d"
        ],
        listA: [10,9,8,7,6,5,4,3,2,1]
    },
    methods: {
        toggleTextandAddA_GLOBAL: function(){
            this.showText = !this.showText;
            this.message = this.message + "a";
        },
        toggleTextandAddA: function (){
            item.show = !item.show;
            item.text = item.text + "a";
        },
        changeColor: function(item) {
            if (item.color != "#fff"){
                item.previousColor = item.color;
                item.color = "#fff";
            }else{
                item.color = item.previousColor;
            }
        }

    }
})
