const URL = "https://pokeapi.co/api/v2/pokemon?limit=1&offset=";
const iURL = "https://pokeapi.co/api/v2/pokemon/"
var app = new Vue({
    el: "#app",
    data: {
        PokemonName : "",
        PokemonImage : "",
        randomNumber: Math.floor(Math.random() * 1000),
        hide : false,
    },
    methods: {
        catchPokemon: function (){
            fetch(URL + encodeURIComponent(this.randomNumber)).then(response =>{
                response.json().then(data=> {
                    console.log(data);
                    this.PokemonName = data.results[0].name;
                    this.getImage(this.PokemonName);
                    this.hide = true;
                    console.log("Pokemon Name: ", data.results[0].name);
                });
            });
        },
        getImage: function (name){
            fetch(iURL + encodeURIComponent(name)).then(response =>{
                response.json().then(data=> {
                    console.log("----");
                    console.log(data);
                    this.PokemonImage = data.sprites.front_default;
                });
            });
        },
        resetPokemon: function (){
            this.PokemonName = "";
            this.PokemonImage = "";
            this.randomNumber =  Math.floor(Math.random() * 1000);
            this.hide = false;
        },
    }
});
