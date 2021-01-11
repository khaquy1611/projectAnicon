
window.addEventListener('DOMContentLoaded', () => {
  
   const check = document.querySelector(".check");
   const sub_navigation = document.querySelector(".sub_navigation");
   const subMenuHorizontal = document.querySelector(".submenu-item-horizontal");
   const changeLanguage = document.querySelector(".change__language");
   const changeLanguageLink = document.getElementsByClassName("translate");
   const language = document.querySelector(".language");
   console.log(language);
   console.log(changeLanguageLink);
   const nav__link = document.querySelectorAll(".nav__link");
   const nav__list__link = document.querySelectorAll(".nav-list-link");
   console.log(nav__list__link);
   console.log(nav__link);
   const caretDown = document.querySelector("ion-icon[name ='caret-down-outline']");
     // sự kiện click vào nút để hiển thị menu con
   check.addEventListener("click",function() {
    sub_navigation.classList.toggle("show__menu");
   });
   const navItemLastChild = document.querySelector(".nav__item:last-child");
   const createFrom = document.querySelector(".create__form");
   const nav_list_item = document.querySelector(".nav-list-item:last-child");
   console.log(nav_list_item);
   // hiển thị khối thay đổi ngôn ngữ
   subMenuHorizontal.addEventListener("click",function(){
    caretDown.classList.toggle('rotates');
    changeLanguage.classList.toggle('show__change__language');
   });

  // dữ liệu thay đổi ngôn ngữ
   const dataLanguage = {
       vietnamese:{
           "home":"Trang chủ",
           "introduce": "Giới thiệu",
           "livestream":"Livestream",
           "Price list": "Bảng giá",
           "News":"Tin tức",
           "Partner": "Đối tác",
           "Login": "Login",
           "Account": "Tạo tài khoản"
       },
       japanese:{
        "home":"ホームページ",
        "introduce": "導入する",
        "livestream":"ライブストリーム",
        "Price list": "価格表",
        "News":"ニュース",
        "Partner": "相棒",
        "Login": "ログインする",
        "Account": "アカウント"
       }
   };

   let attrLink;
   for (let index = 0; index < changeLanguageLink.length; index++) {
       const element = changeLanguageLink[index];
       element.addEventListener("click" , function(){
           language.textContent = this.textContent;
            attrLink =  this.getAttribute('language');
            console.log(attrLink); 
            for(let j = 0 ; j < nav__link.length ; j++){
                let attrNav = nav__link[j].getAttribute('key');
                let attrNavLink = nav__list__link[j].getAttribute('key');
                nav__link[j].textContent = dataLanguage[attrLink][attrNav];
                nav__list__link[j].textContent = dataLanguage[attrLink][attrNavLink];
            }     
       });
   }


/*  Counter starts */

const counter = document.querySelectorAll(".counter");
console.log(counter);
const speed = 2000;
counter.forEach(counters => {
    const updateCount = () => {
        // Convert string to number;
        const dataCount =   +counters.getAttribute("data-target");
        const count = +counters.innerText;
        console.log(count);
        const icr = dataCount / speed;
        if(count < dataCount) {
            counters.innerText = Math.ceil(count + icr);
            // setTimeout(updateCount , 1);
        }else {
            counters.innerText = dataCount;
        }
      
    }
    updateCount();
});
/* ./ Counter */



/* scroll fix menu */
window.addEventListener("scroll" , function() {
  const header_top = document.querySelector(".header__top");
    header_top.classList.toggle("sticky" , window.scrollY > 0);
});
/* scroll fix menu */



/* click video popup */
const watch = document.querySelector(".watch");
const video__popup = document.querySelector(".video__popup");
const close__video = document.querySelector(".close__video");
watch.addEventListener("click",function() {
  video__popup.classList.add("show__video");
});
close__video.addEventListener("click",function() {
  video__popup.remove("show__video");
})
/* ./ video popup */



},false);



$(document).ready(function(){

$(window).scroll(function() {
  if($(this).scrollTop() > 3400) {
    $(".scroll__top").fadeIn();
  }else {
    $(".scroll__top").fadeOut();
  }
});
/* scroll__top */
$(".scroll__top").click(function() {
  $("html , body").animate({scrollTop:0},800);


});
/* ./ scroll__top  */





  /* slick slider */
  $('.slider__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: ".next",
    prevArrow: ".prev",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1
        },
        
      },
      {
        breakpoint: 411,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1
        },
        
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  /* ./ slick slider */
});
