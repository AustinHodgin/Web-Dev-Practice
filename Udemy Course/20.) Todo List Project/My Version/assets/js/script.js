//check off to-dos by clicking on them
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
//click on X to delete li
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
//add todo to list from text input
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grab new todo text from input
        var newTodo = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class=\"fas fa-trash\"></i> </span> " + newTodo + "</li>");
    }
});

$("#plus").click(function(){
    $("input[type='text']").fadeToggle();
});