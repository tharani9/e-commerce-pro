var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    centerslide:'true',
    fade:'true',
    grabcursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicbullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0: {
        slidesPerView:1,
      },
      
        520: {
          slidesPerView:2,
        }, 
      
        
          950: {
            slidesPerView:3,
          },
        },
  });