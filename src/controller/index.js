/*jshint esversion: 8 */
$(document).ready(function(){
  $(".fa-search").click(function(){
    $(".searchForm, .searchFeild").toggleClass('active');
    $(".searchFeild[type='text']").focus();
  });
});

function navChange() {
  document.getElementsByClassName('navBar').style.backgroundColor="black";
  console.log('q');
}
window.addEventListener('scroll', navChange);
