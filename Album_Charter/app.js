const URL = "https://theaudiodb.com/api/v1/json/523532/searchalbum.php?s=";
var app = new Vue({
    el: "#app",
    data: {
        artistInput: "",
        searchAlbumList: [],
        pickedAlbumList:[],
        tempList:[], 
        pickedUp: -1,
        pickedUpAlbum:{},
    },
    methods: {
        searchArtist: function () {
            //console.log(this.artistInput);
            //this.artistInput = "";
            fetch(URL + encodeURIComponent(this.artistInput)).then(response =>{
                response.json().then(data=> {
                    this.searchAlbumList = data.album;
                    //console.log(data);
                });
            });
            this.artistInput = "";
        },
        addAlbum: function (index){
            let album = this.searchAlbumList[index];

            this.pickedAlbumList.push(album);
    },
        removeAlbum: function(index){
            this.pickedAlbumList.splice(index,1);
        },
        pickupAlbum: function (index){
            this.pickedUp = index;
            console.log("picked up ", this.pickedUp);

            this.tempList = this.pickedAlbumList;
        },
        dropAlbum: function(drop_index){
            if (this.pickedUp < 0) {return;}
            if (drop_index >= this.pickedAlbumList.length){
                drop_index = this.pickedAlbumList.length -1;
            }
            console.log("dropped",drop_index);
            let movedAlbum = this.pickedUpAlbum;
            this.pickedAlbumList.splice(this.pickedUp, 1);
            this.pickedAlbumList.splice(drop_index, 0 , movedAlbum);
            this.pickedUp = -1;
        },
//hover Album ??
    }
});
