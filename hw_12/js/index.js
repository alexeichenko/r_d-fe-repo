function fullscreenBurger() {
  const menuBtn = document.querySelector('.burger__button');
  const menu = document.querySelector('.burger__body');
  const body = document.body;

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
      body.classList.toggle('lock');
    });
  };

  menu.querySelectorAll('.burger__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      body.classList.remove('lock');
    })
  });

};

function smoothScroll() {
  const anchors = document.querySelectorAll('a[href*="#"]');

  if (anchors > 0) {
    anchors.forEach(anchor => {
      anchor.addEventListener('click', event => {
        event.preventDefault();
        const blockId = anchor.getAttribute('href').substring(1);
        document.getElementById(blockId).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    });
  };
};

function onTopButton() {
  const onTopBtn = document.querySelector('.on-top-button');
  function showScrollButton() {
    if (window.scrollY > 500) {
      onTopBtn.style.opacity = '1';
    } else {
      onTopBtn.style.opacity = '0';
    };
  };

  if (onTopBtn) {
    window.onscroll = function() {
      showScrollButton();
    };

    onTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  };
};

fullscreenBurger();
smoothScroll();
onTopButton();