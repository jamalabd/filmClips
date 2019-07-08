/*jshint esversion: 8 */
$(document).ready(function(){
  $(".fa-search").click(function(){
    $(".searchForm, .searchFeild").toggleClass('active');
    $(".searchFeild[type='text']").focus();
  });
});

window.addEventListiner('scroll', ()=>{
  document.getElementsByClassName('navBar').style.backgroundColor = "blue";
});
