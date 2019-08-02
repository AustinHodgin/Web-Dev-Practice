window.setTimeout(function() {
    var todos = [];
    var input = prompt("What would you like to do?");

    
    while(input !== "quit"){
        if(input === "list"){
           listTodos(todos);
        }else if(input === "new"){
           addTodo(todos);
        }else if(input === "delete"){
           deleteTodo(todos);

        }
        var input = prompt("What would you like to do?");
    }
    console.log("Okay, Thanks for using todo app")


  }, 500);

  function listTodos(todos){
    console.log("***********");
    todos.forEach(function(todo,i){
        console.log(i + ": " + todo);
    });
    console.log("***********");
  }
  function addTodo(todos){
       //ask for new todo
       var newTodo = prompt("Enter new todo");
       //add new todo
       todos.push(newTodo);
       console.log("Todo Added");
  }

  function deleteTodo(todos){
    //ask for index of todo to delete
    var index = prompt("Enter index of todo to delete");
    //delete todo at that index
    todos.splice(index,1);
    console.log("Todo Deleted");
  }