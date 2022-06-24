const toggleButton = document.querySelectorAll('.toggle');
const menu = document.querySelector('.nav__menu');
const mybutton = document.querySelector('.scroll__btn');
toggleButton.forEach(item => {
  item.addEventListener('click', function () {
    menu.classList.toggle('nav__menu__open');
    console.log('hello');
  });
});

let swiper = new Swiper('.mySwiper', {
  spaceBetween: 45,
  loop: 'true',
  slidesPerView: 'auto',
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },
});

let swiper_arrow = new Swiper('.portfolio', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
});
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.classList.remove('hidden');
  } else {
    mybutton.classList.add('hidden');
  }
}

const goToTop = () => {
  document.body.scrollIntoView();
};

mybutton.addEventListener('click', goToTop);
