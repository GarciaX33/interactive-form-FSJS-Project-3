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
