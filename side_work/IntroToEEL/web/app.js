eel.hello_py("javascript");
eel.expose(hello_js);
function hello_js(text){
    console.log("this is javascript, Hello ", text);
    }
var app = new Vue({
    el: "#app",
    data: {
        message: "",
    },
    methods: {
    },
})
