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
    speed:1000,
    // freeMode: true,
    allowTouchMove: false,
    // cssMode: true,
    autoplay: {
      delay:2000,
      
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

const gridItem = document.querySelector('.grid-item-1');
const image = new Image();
image.src = "https://www.pixel4k.com/wp-content/uploads/2018/11/japan-landscape-vector-minimalist-4k_1541970815.jpg";

image.addEventListener('load', () => {
    gridItem.style.backgroundImage = `url(${image.src})`;
    gridItem.classList.add('loaded'); // Add the "loaded" class to show the image with fade-in
});