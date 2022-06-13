var allTiles = document.querySelectorAll(".tile");
console.log("all tiles:", allTiles);
var txtbox = document.querySelector("#txtbox");
var player = "O"

function checkWinner(play){
    var sets = ["row1","row2","row3","col1","col2","col3","diag1","diag2"];
    var winner = false;
    sets.forEach(function (set) {
        var selector = "."+ set + "."+ play;
        var tiles = document.querySelectorAll(selector);
        console.log("selector:", selector, "count:", tiles.length);
        if( tiles.length == 3){
            winner = true;
        }
    });
    return winner;
}

allTiles.forEach(function(tile){
    console.log("one tile of a time:", tile);
    tile.onclick = function(){
        txtbox.innerHTML= "";
        if(tile.innerHTML != ""){
            txtbox.innerHTML = "No Cheating!";
        }
        else{
            if(player == "X"){
                tile.classList.add("o");
                player = "O"
                if(checkWinner("o")){
                    console.log("o Wins");
                    txtbox.innerHTML = "O Wins!";
                }
            }else{
                tile.classList.add("x");
                player = "X"
                if(checkWinner("x")){
                    console.log("x Wins");
                    txtbox.innerHTML = "X Wins!";
                }
            }
            tile.innerHTML = player;
        }
    
    };
});