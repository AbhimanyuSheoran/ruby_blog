// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//$(".savebutton").click(function() {
//    $('.form').submit(function() {
//    var valuesToSubmit = $(this).serialize();
//    $.ajax({
//        url: $(this).attr('action'),
//        data: valuesToSubmit,
//        dataType: "JSON" 
//    }).success(function(json){
//        
//    });
//    return false; 
//});
//         });
//$("#add_comment").html("<%= escape_javascript(render(:partial => 'comment', :locals => {:comment => @comment})).html_safe %>");
$('.delete_post').bind('ajax:success', function() {
    $(this).closest('tr').fadeOut();
});