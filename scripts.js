$(document).ready(function() {
  
  if (localStorage.getItem('todos')) {
    $('#ul1').html(localStorage.getItem('todos'));
  }


//var numberOfli = $("ul").find($("li")).length+1;
var counter =  makeCounter();
counter.set();


$("#add").click(function(e){
  var value = $("#new-task").val();
  e.preventDefault();
  if(value==""){
      $('#alert').html("<strong>Warning!</strong> You left the to-do empty");
      $('#alert').fadeIn().delay(2500).fadeOut();
  }
  else{
      console.log(value);
      $("#ul1").append("<li>"+"<span class ='countNumber'>"+counter()+". "+"</span>"+value+"<span class = 'close'>\u00D7</span>"+"</li>" );
      $("#new-task").val("");
      $(".close").click(function(e){
      $(this).closest('li').remove();
      
      var todos = $('#ul1').html();
      localStorage.setItem('todos', todos);
      
      counter.set();

  return false;
  });
}

var todos = $('#ul1').html();
localStorage.setItem('todos', todos);
return false;
});//click add


$(".close").click(function(e){
  $(this).closest('li').remove();
  var todos = $('#ul1').html();
  localStorage.setItem('todos', todos);
  counter.set();
  return false;
});

$(document).on('click', 'li', addClass);

function addClass(){
  $(this).toggleClass('checked');
  var todos = $('#ul1').html();
  localStorage.setItem('todos', todos);
  return false;
}

$("#filterDoneList").click(function(e){
  e.preventDefault();
  $('li').show();	

  var liShow = $("li").not(".checked");
    $(liShow).hide();	

});

$("#filterAll").click(function(e){
  e.preventDefault();
  $('li').show();	

});

$("#filterDoList").click(function(e){
  e.preventDefault();
  $('li').hide();	
  var liShow = $("li").not(".checked");
  $(liShow).show();	

});

$("#clear").click(function(e){
  e.preventDefault();
  $('li').remove();	
  window.localStorage.clear();
  location.reload();
  return false;
});


$('#todoListContainer').scroll(function() {myFunction()});



function makeCounter(){
  var count = 1;
   function counter(){
    return count++;
  }
  counter.set = function(){
    var numberOfli = $("ul").find($("li")).length+1;
    count = numberOfli;

  };
  counter.reset = function(){
    count = 1;

  };
  return counter;


}


});//ready

