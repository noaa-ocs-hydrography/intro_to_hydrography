$(document).ready(function(){
  var forms = document.getElementsByTagName("form");
  for (var i=0; i<forms.length; i++) {
    forms[i].reset();
  }
  
  // MULTIPLE CHOICE RADIO BUTTON
  $(".radio .submit_button").click(function(){
    $(this).parent().parent().parent().children(".answer")
      .css("display", "block");
    $(this).siblings(".correct")
      .addClass("correct_answer");
  });
  
  // CHECKBOXES
  $(".checkboxes .submit_button").click(function(){
    $(this).parent().parent().parent().children(".answer")
      .css("display", "block");
    $(this).siblings(".correct")
      .addClass("correct_answer");
  });
  
  // INLINE DROPDOWNS
  $(".dropdown .submit_button").click(function(){
	$(this).parent().children(".dropdown_correct")
	.css("display","block");
	$(this).parent().parent().parent().children(".answer")
      .css("display","block");
	  $(this).siblings(".correct")
      .addClass("correct_answer");
  });
});