var count = 0;

$(document).ready(function (){
  console.log("Ready!");
  divCreate();
});

function divCreate(){
//step 2
  $('.container').on("click", ".button", function (){
    $(".container").append("<div></div>");
//step 3
    var $el = $(".container").children().last();
    count++;
    $el.append("<p>"+count+"</p>");
//step 4
    $el.append("<button class='color swap'>Swap</button>");
    $el.append("<button class='color delete'>Delete</button>");
//step 6
  $('.container').on("click", ".swap", function(){
    $(this).parent().children(".color").css("background-color", "yellow");
  });
//step 7
  $('.container').on("click", ".delete", function(){
    $(this).parent().remove();
  });

  });
}
