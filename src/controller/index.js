$(document).ready(function(){
  $(".fa-search").click(function(){
    $(".searchForm, .searchFeild").toggleClass('active');
    $(".searchFeild[type='text']").focus();
  });
});


console.log('ham');
