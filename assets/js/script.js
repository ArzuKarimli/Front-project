"use strict";

//scroll-menu
window.addEventListener("scroll", function() {
    var header = document.querySelector(".header-sticky");
    if (window.scrollY > 0) {
        header.classList.add("visible");
    } else {
        header.classList.remove("visible");
    }
});


//header-dropdown
let dropdownMenus = document.querySelectorAll(".dropdown1");
dropdownMenus.forEach(function(dropdownMenu) {
    dropdownMenu.addEventListener("click", function(e) {
        e.preventDefault();
        
     
        let dropdownUp = this.querySelector("[class^='dropdown-up']");

   
        dropdownMenus.forEach(function(menu) {
            let otherDropdownUp = menu.querySelector("[class^='dropdown-up']");
            if (dropdownUp !== otherDropdownUp) {
                otherDropdownUp.classList.add("d-none");
            }
        });

        if (dropdownUp.classList.contains("d-none")) {
            dropdownUp.classList.remove("d-none");
        } else {
            dropdownUp.classList.add("d-none");
        }
    });
});

//header-down
let selectMenu = document.querySelector(".select-box .select");
let selectDropdown = document.querySelector(".select-dropdown");
let downIcon=document.querySelector(".select-box .select .down-icon")

selectMenu.addEventListener("click", function() {
    if (selectDropdown.classList.contains("d-none")) {
        selectDropdown.classList.remove("d-none");
        downIcon.style.rotate="-180deg";
    } else {
        selectDropdown.classList.add("d-none");
        downIcon.style.rotate="0deg";
    }
});


let menuDropdown=document.querySelector(".dropdown-m");
let menu=document.querySelector(".menu-header");
menu.addEventListener("click",function(){
    if(menuDropdown.classList.contains("d-none")){
        menuDropdown.classList.remove("d-none")
    }else{
        menuDropdown.classList.add("d-none")
    }
})


//slider

document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll("#slider .slider-box");
    const dots = document.querySelectorAll(".dotm");

    showBanner(0);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function() {
            showBanner(index);
        });
    });

    function showBanner(index) {
        boxes.forEach((box, i) => {
            if (i === index) {
                box.classList.add('active');
                dots[i].classList.add('active');
                dots[i].style.backgroundColor = "white"; 
            } else {
                box.classList.remove('active');
                dots[i].classList.remove('active');
                dots[i].style.backgroundColor = "#fff3"; 
            }
        });
    }
});




//tab-menu
let tabBtns = document.querySelectorAll(".trending-tab .tab");
let tabContents = document.querySelectorAll(".trend-products");

tabBtns.forEach((tab, index) => {
    tab.addEventListener("click", function(e) {
        e.preventDefault();

        tabBtns.forEach(tab => {
            tab.classList.remove("active");

        this.classList.add("active");

        tabContents.forEach(content => {
            content.style.display = "none";
        });

        tabContents[index].style.display = "block";
    });
});
});


//days-counter
  
   const countdownDate = new Date();
   countdownDate.setDate(countdownDate.getDate() + 118);

   const countdown = setInterval(updateCountdown, 1000);

   function updateCountdown() {
       const currentDate = new Date();
       const difference = countdownDate - currentDate;

       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
       const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((difference % (1000 * 60)) / 1000);

       const spans = document.querySelectorAll('.product-timer span');

       spans[0].innerText = formatTime(days);
       spans[1].innerText = formatTime(hours);
       spans[2].innerText = formatTime(minutes);
       spans[3].innerText = formatTime(seconds);

       if (difference < 0) {
           clearInterval(countdown);
          
           spans.forEach(span => span.innerText = "00");
       }
   }

   function formatTime(time) {
       return time < 10 ? `0${time}` : time;
   }

   updateCountdown();



   $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

//two-slider
  document.addEventListener("DOMContentLoaded", function() {
    const banners = document.querySelectorAll(".banner");
    const dots = document.querySelectorAll(".dot");


    showBanner(0);


    dots.forEach((dot, index) => {
        dot.addEventListener("click", function() {
            showBanner(index);
        });
    });

    function showBanner(index) {
        banners.forEach((box, i) => {
            if (i === index) {
                box.classList.add('active');
                dots[i].classList.add('active');
                dots[i].style.backgroundColor = "white"; 
            } else {
                box.classList.remove('active');
                dots[i].classList.remove('active');
                dots[i].style.backgroundColor = "#fff3"; 
            }
        });
    }
});

//card-slider
$(document).ready(function(){
    $('.cards').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: false, 
        nextArrow: false, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

//sidebar


    let basketBtn = document.querySelector(".open-btn");
    console.log(basketBtn);
    let sidebarCloseBtn = document.querySelector(".close-btn .fa-x");
    console.log(sidebarCloseBtn);
    let sidebar = document.querySelector(".sidebar");
    console.log(sidebar);

    basketBtn.addEventListener("click", function() {
      if (sidebar.classList.contains("move-sidebar")) {
        sidebar.classList.remove("move-sidebar");
      }
      
    });

    sidebarCloseBtn.addEventListener("click", function() {
      if (!sidebar.classList.contains("move-sidebar")) {
        sidebar.classList.add("move-sidebar");
      }
     
    });
