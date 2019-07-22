/*jshint esversion: 8 */
  export const navfunctions = () =>{
    $(document).ready(function(){
     // expanding Search Bar
    const searchExp = $(".fa-search").click(function(){
      $(".searchForm, .searchFeild").toggleClass('active');
      $(".searchFeild[type='text']").focus();
      });
      // navBar color change on scroll
    const navColor = $(window).scroll(()=>{
        if($(window).scrollTop()>70){
          $('.navBar').addClass('navColor');
        }else{
          $('.navBar').removeClass('navColor');
        }
      });


    return searchExp, navColor;



    });
  };
