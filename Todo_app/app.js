var url="http://todo2022.codeschool.cloud";

var app = new Vue({
    el: '#app',
    data: {
        todos: [],
        usableTags: [],

        nameInput: "",
        descInput: "",
        doneInput: false,
        dateInput: "",
        tagsInput: {},

        newTodoID: "",

        editingIndex:  -1,

    },
    methods: {
        addTodo: function (){
            let tagsList = [];
            this.usableTags.forEach(tag => {
                if (this.tagsInput[tag]) {
                    tagsList.push(tag);
                }
            });
            let newTodo = {
                name: this.nameInput,
                description: this.descInput,
                done: this.doneInput,
                deadline: this.dateInput,
                tags: tagsList ,
        }
            this.postTodo(newTodo);

            this.nameInput="";
            this.descInput="";
            this.doneInput=false;
            this.dateInput="";
            this.resetTagsInput();
        },
        resetTagsInput: function(){
            this.tagsInput={};
        },
        editTodo: function(todo_object, todo_index){
            this.editingIndex = todo_index;
            this.editingTodoCopy = {...todo_object};
            this.editingTags = [];
            this.usableTags.forEach(tag =>{
                if (todo_object.tags.includes(tag)){
                    this.editingTags.push(true);
                }else{
                    this.edititngTags.push(false);
                }
            });
        },

        postTodo: function (new_todo){

            fetch(url + "/todo", {
                method: "POST",
                body: JSON.stringify(new_todo),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response=>{
                response.json().then((created_todo) =>{
                    //console.log(created_todo);
                    this.newTodoID = created_todo.id_;
                    this.getTodos();
                });
            });

        },
        getTodos: function(){
            fetch(url + "/todos").then((response) => {
                response.json().then((data) =>{
                    this.todos = data;
                    this.todos.forEach((todo) => {
                        todo.deadline = todo.deadline.split("T")[0];
                    })
                });
            });
        },
        
        deleteTodo: function (todo_object){
            fetch(url + "/todo/" + todo_object._id, {
                method: "DELETE",
            }).then(response => {
                response.json().then(deleted_todo =>{
                    console.log(deleted_todo + " deleted");
                    this.getTodos();
            });
        });
    }
    },
    created: function () {
        this.getTodos();

        fetch(url + "/tags").then ((response)=> {
           response.json().then((data) => {
               this.usableTags = data;
               this.resetTagsInput(); 
           });
        });

    }
});
