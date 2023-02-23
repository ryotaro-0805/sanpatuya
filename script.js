// const { ContactSupportOutlined } = require("@material-ui/icons");

const mySwiper = new Swiper('.swiper', {
  // Optional parameters
  speed:2500,
  effect: "fade",
  loop: true,
  autoplay:{
    delay:5000
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const getScrollTag=document.getElementById('js-scrollTop');
addEventListener('scroll',()=>{
  const scrollDistance=window.scrollY;
  if (scrollDistance>500){
    getScrollTag.classList.add('active');
  } else if (scrollDistance<=500){
    getScrollTag.classList.remove('active');
  }
});

// メニュー英語日本語書き換え
const menu_en=['About','Access','Information','News'];
const menu_ja=['お店について','アクセス','お問い合わせ','ニュース'];
const getMenu=document.querySelectorAll('.menu_li');
getMenu.forEach((element,index) => {
  element.addEventListener('mouseover',(e)=>{
    getMenu[index].textContent=menu_ja[index];
  });
  element.addEventListener('mouseleave',()=>{
    getMenu[index].textContent=menu_en[index];
  });
});

// オープンメニュー

const get_menuTag=document.getElementById('js-open_menu');
const get_menu_innerTag=document.querySelectorAll('.open_menu_wrapper div');
const get_menu_wrapper2=document.getElementById('js-menu_wrapper2');
console.log(get_menu_wrapper2);
get_menuTag.addEventListener('click',()=>{
  get_menu_innerTag.forEach(tag => {
    tag.classList.toggle('active');
    get_menu_wrapper2.classList.toggle('active');
    addEventListener('scroll',()=>{
      get_menu_wrapper2.classList.remove('active');
      tag.classList.remove('active');
    });
  });
});


// オープンメニューここまで

// intersection observer
const getTag=document.querySelectorAll('.intersection_observer');
const options={
  threshold:.25
}
getTag.forEach((target)=>{
  const observer=new IntersectionObserver(callback,options);
  observer.observe(target);
});
function callback(entries){
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
}
  


// intersection observer ここまで
