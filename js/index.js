window.addEventListener("load",function(){
  

const swiper1 = new Swiper('.station1', {
  // Optional parameters
//   direction: 'vertical',
autoHeight:true,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable:true
  },
  
 slidesPerView:1,
 autoplay:{
    dalay:7000
 },
 speed:1000,
 
});

const swiper2 = new Swiper('.station2', {
  // Optional parameters
//   direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable:true
  },
  slidesPerView:1,
  autoplay:{
    dalay:7000
 },
speed:1000,
 
});

})