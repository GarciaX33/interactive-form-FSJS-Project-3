/** Set focus on the first text field **/
/** will be ready when pageloads **/
$(document).ready( function(){
/** will set focus on first textfield name id **/
  $('#name').focus();
});

/** ”Job Role” section **/
$(document).ready( function(){
/** will hide other-title id upon page load **/
  $('#other-title').hide();
});

$('#title').change( function() {

  if ($(this).val() == "other") {
    $('#other-title').show();
  }
});

/** ”T-Shirt Info” section **/
$(document).ready( function(){
/** will hide colors-js-puns id upon page load **/
  $('#colors-js-puns').hide();
});
$('#design').change( function() {
  if ($(this).val() == "js puns")
});
