const menu = document.querySelector('.menu__body');
const menuBtn = document.querySelector('.menu__icon');
const btnScrollToTop = document.querySelector('.onTop');
const body = document.body;
/* Menu */
if (menu && menuBtn) {

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
  });

  menu.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      body.classList.remove('lock');
    })
  });

};

/* Smooth scroll */

const anchors = document.querySelectorAll('a[href*="#"]');

if(anchors.length > 0) {
  anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
      event.preventDefault();
      const blockId = anchor.getAttribute('href').substring(1);
      document.getElementById(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  });
}

/* On top button */

function showScrollButton() {
  if (window.scrollY > 500) {
    btnScrollToTop.style.opacity = '1'
  } else {
    btnScrollToTop.style.opacity = '0'
  }
};

if (btnScrollToTop) {

  window.onscroll = function() {
    showScrollButton();
  };

  btnScrollToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

}