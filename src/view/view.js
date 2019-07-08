/*jshint esversion: 8 */
  export const expandingSearch = () =>{
    $(document).ready(function(){
    $(".fa-search").click(function(){
      $(".searchForm, .searchFeild").toggleClass('active');
      $(".searchFeild[type='text']").focus();
      });
    });
  };

    $(window).scroll(()=>{
      if($(window).scrollTop>300){
        $('navBar').addClass('navColor');
      }
    });
