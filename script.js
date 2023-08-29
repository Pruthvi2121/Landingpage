// document.addEventListener("DOMContentLoaded", function () {
  
  
//   });

var swiper = new Swiper(".image_slider", {
    direction: "vertical",
    centeredSlides: true,
    loop:true,
    speed:10000,
    // freeMode: true,
    allowTouchMove: false,
    // cssMode: true,
    autoplay: {
      delay:100,
      
    },
    
    pauseOnInteraction: false
  });

var swiper2 = new Swiper(".cards_slider", {
    // direction: "vertical",
    centeredSlides: true,
    loop:true,
    speed:10000,
    // freeMode: true,
    allowTouchMove: false,
    // cssMode: true,
    autoplay: {
      delay:100,
      
    },
    
    pauseOnInteraction: false
  });



  const menu = document.getElementById('menu')
  const sm_nav = document.querySelector('.sm-nav')
  menu.onclick = function(){
      sm_nav.classList.toggle('active')
      if(sm_nav.classList.contains('active')){
        menu.innerText = 'Close'
        menu.style = 'color:red;'
        sm_nav.style = 'z-index:3;'
        
      }
      else{
        menu.innerText = 'Menu'
        sm_nav.style = 'z-index:2;'
        menu.style = 'color:white'
      }
      
  }