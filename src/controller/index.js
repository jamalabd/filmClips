$(document).ready(function(){
  $(".fa-search").click(function(){
    $(".searchForm, .searchFeild").toggleClass('active');
    $(".searchFeild").focus();
  });
});
