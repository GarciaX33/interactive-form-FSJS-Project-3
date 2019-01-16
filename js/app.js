/** Set focus on the first text field **/
$(document).ready( function(){
/** will set focus on first textfield name id **/
  $('#name').focus();
});

/** Job Role section **/
$(document).ready( function(){
/** will hide othertitle id upon page load **/
  $('#other-title').hide();
});
/** will have other title appear once other is selected **/
$('#title').change( function() {
  if ($(this).val() == "other") {
      $('#other-title').show();
  }
    else {
      $('#other-title').hide();
  }
});

/** T-Shirt Info section **/
$(document).ready( function(){
/** will hide colors-js-puns id upon page load **/
  $('#colors-js-puns').hide();
});
$('#design').change( function() {
  if ($(this).val() == "js puns") {
      $('#colors-js-puns').show();
      $('#color').val('cornflowerblue'); /** will start with cornflowerblue **/
      $('#color option[value = cornflowerblue]').show();
      $('#color option[value = darkslategrey]').show();
      $('#color option[value = gold]').show();
      $('#color option[value = tomato]').hide();
      $('#color option[value = steelblue]').hide();
      $('#color option[value = dimgrey]').hide();
  } else if ($(this).val() == "selectheme") {
    $('#colors-js-puns').hide();
  } else if ($(this).val() == "heart js") {
      $('#colors-js-puns').show();
      $('#color').val('tomato'); /** will start with tomato **/
      $('#color option[value = tomato]').show();
      $('#color option[value = steelblue]').show();
      $('#color option[value = dimgrey]').show();
      $('#color option[value = cornflowerblue]').hide();
      $('#color option[value = darkslategrey]').hide();
      $('#color option[value = gold]').hide();
  }
});

/** Register for Activities section **/
let runningTotal = 0;
/** will append a div to activities to show Total **/
$('.activities').append('<div></div>')
/** will add 100 to runningTotal on JS frameworks when checked **/
$("input[name='js-frameworks']").on("click", function(){
  if($(this).is(":checked")){
   runningTotal = runningTotal + 100;
  $(".activities div").text("Total: $ " + runningTotal);
  /** will hide conflicting time event express **/
  $("[name='express']").attr("disabled", "true").parent().hide();
  /** will unhide conf. time event and subtract 100 from runningTotal when unchecked **/
} else {
  runningTotal = runningTotal - 100;
  $(".activities div").text("Total: $ " + runningTotal);
  $("[name='express']").removeAttr("disabled").parent().toggle()
}
});
/** will add 100 to runningTotal on Express when checked **/
$("input[name='express']").on("click", function(){
  if($(this).is(":checked")){
    runningTotal = runningTotal + 100;
    $(".activities div").text("Total Cost: $ " + runningTotal);
    /** will hide conflicting time event JS frameworks **/
    $("[name='js-frameworks']").attr("disabled", "true").parent().hide();
    /** will unhide conf. time event and subtract 100 from runningTotal when unchecked **/
    } else {
    runningTotal = runningTotal - 100;
    $(".activities div").text("Total Cost: $ " + runningTotal);
    $("[name='js-frameworks']").removeAttr("disabled").parent().toggle()
    }
});
$("input[name='js-libs']").on("click", function(){
  if($(this).is(":checked")){
    runningTotal = runningTotal + 100;
    $(".activities div").text("Total Cost: $ " + runningTotal);
    $("[name='node']").attr("disabled", "true").parent().hide();
    } else {
    runningTotal = runningTotal - 100;
    $(".activities div").text("Total Cost: $ " + runningTotal);
    $("[name='node']").removeAttr("disabled").parent().toggle()
    }
});
$("input[name='node']").on("click", function(){
  if($(this).is(":checked")){
    runningTotal = runningTotal + 100;
    $(".activities div").text("Total Cost: " + runningTotal);
    $("[name='js-libs']").attr("disabled", "true").parent().hide();
    } else {
    runningTotal = runningTotal - 100;
    $(".activities div").text("Total Cost: $ " + runningTotal);
    $("[name='js-libs']").removeAttr("disabled").parent().toggle()
    }
});
$("input[name='build-tools']").on("change", function(){
  if($(this).is(":checked")){
    runningTotal = runningTotal + 100;
    $(".activities div").text("Total Cost: $ " + runningTotal);
    } else {
    runningTotal = runningTotal - 100;
    $(".activities div").text("Total Cost: $ " + runningTotal);
    }
});

$("input[name='npm']").on("click", function(){
  if($(this).is(":checked")){
    runningTotal = runningTotal + 100;
    $(".activities div").text("Total Cost: $ " + runningTotal);
    } else {
    runningTotal = runningTotal - 100;
    $(".activities div").text("Total Cost: $ " + runningTotal);
    }
});

$("input[name='all']").on("click", function(){
  if($(this).is(":checked")){
    runningTotal = runningTotal + 200;
    $(".activities div").text("Total Cost: $ " + runningTotal);
    } else {
    runningTotal = runningTotal - 200;
    $(".activities div").text("Total Cost: $ " + runningTotal);
    }
});

/** Payment Info section**/
/** The "Credit Card" payment option is selected by default.**/
/** user can only choose cc,pp, or bitcoin **/
 $('#payment option[value="select_method"]').remove();
 $(document).ready( function(){
 /** will hide paypal, bitcoin id upon page load **/
   $('#paypal').hide();
   $('#bitcoin').hide();
 });
 $('#payment').change(function(){
	if ($('#payment option:selected').val() === "paypal") {
		$('#credit-card').hide();
    $('#bitcoin').hide();
		$('#paypal').show();

	} else if ($('#payment option:selected').val() === "bitcoin") {
		$('#credit-card').hide();
    $('#paypal').hide();
		$('#bitcoin').show();
	} else {
		$('#credit-card').show();
    $('#paypal').hide();
    $('#bitcoin').hide();
	}
});

/** Form Validation **/
/** Name Field cant be blank **/
$(document).ready(function(){
  /**will make name field red if left blank & green if not left blank  **/
  $('#name').focusout(function(){
    if ($('#name').val() === '') {
    $('#name').css('border-color', 'red');
    alert('Enter Your Name Before Submitting Please.');
  } else {
    $('#name').css('border-color', 'green');
  }
  });
});

function emailCheck(email) {
  return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
}

$(document).ready(function() {
  $('#email').focusout(function(){
    if ( $( "input[name='user_email']" ).val() === "" ) {
      $('#email').css('border-color', 'red');
     alert("Enter Valid Email Please.")
    return false;
  } else if (!emailCheck($('#email')[0].value)) {
    $('#email').css('border-color', 'red');
    alert("Enter Valid Email Please.")
  } else {
    $('#email').css('border-color', 'green');
  }
  });
});


$(document).ready(function() {
  $('#cc-num').focusout(function(){
    if ($('#cc-num').val() === '' || $('#cc-num').val().length < 13 || $('#cc-num').val().length > 16 ) {
      $('#cc-num').css('border-color', 'red');
      alert("Check CC & Make sure its 13 to 16 digits Please.")
    } else if (isNaN($('#cc-num').val())) {
      alert("Enter Numbers Only Please.")
      $('#cc-num').css('border-color', 'red');
    } else {
      $('#cc-num').css('border-color', 'green');
    }
  });
});

$(document).ready(function() {
  $('#zip').focusout(function(){
    if ($('#zip').val() === '') {
      $('#zip').css('border-color', 'red');
      alert("Check zip & Make sure its 5 digits Please.")
    } else if (isNaN($('#zip').val())) {
      alert("Enter Numbers Only Please.")
      $('#zip').css('border-color', 'red');
    } else if ($('#zip').val().length < 5 ) {
      alert("Check zip & Make sure its 5 digits Please.")
      $('#zip').css('border-color', 'red');
    } else {
      $('#zip').css('border-color', 'green');
    }
  });
});

$(document).ready(function() {
  $('#cvv').focusout(function(){
    if ($('#cvv').val() === '') {
      $('#cvv').css('border-color', 'red');
      alert("Check cvv & Make sure its 3 digits Please.")
    } else if (isNaN($('#cvv').val())) {
      alert("Enter Numbers Only Please.")
      $('#cvv').css('border-color', 'red');
    } else if ($('#cvv').val().length < 3 ) {
      alert("Check cvv & Make sure its 3 digits Please.")
      $('#cvv').css('border-color', 'red');
    } else {
      $('#cvv').css('border-color', 'green');
    }
  });
});

$(document).submit(function(event){
  if($('#cc-num').val() === ''){
    alert('Check CC Number Before Submitting Please.');
    return false
  }
});

$(document).submit(function(event){
  if($('.activities input[type="checkbox"]:checked').length !== 0){
    alert("Event(s) Confirmed");
  } else{
    alert('Check 1 Event before submitting');
    return false
  }
});

$(document).submit(function(event){
  if($('#zip').val() === ''){
    alert('Check Zip Before Submitting Please.');
    return false
  }
});
