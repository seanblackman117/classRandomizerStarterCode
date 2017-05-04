$(document).ready(function(){

 var ScriptEders = ["Sean", "Mustapha", "Syndra", "Julian", "Isaiah", "Brian G.", "Rosanique"];
 var ScriptEducators = ["Julia", "Shea", "Scot", "Mr.Goett"];
 
  $("#studentButton").click(function(){
     var bob = ScriptEders[Math.floor(Math.random()*ScriptEders.length)]; 
      $("#studentDisplay").html(bob);
  });
       
   $("#teacherButton").click(function(){
     var tim = ScriptEducators[Math.floor(Math.random()*ScriptEducators.length)]; 
      $("#teacherDisplay").html(tim);
  });
});
