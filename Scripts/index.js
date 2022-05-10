const backImg = document.querySelector('.star');
const names = document.querySelector('.name');
const navToggler = document.querySelector('.nav-toggler');
const navBar = document.querySelector('.navbar');
const identity = document.querySelector('.identity');
const burger = document.querySelector('.burger');
const aboutmeList = document.querySelector('.aboutme-list');
const aboutme = document.getElementById('about-me-section');
const skills = document.querySelector('.section3');
const contact = document.getElementById('contact-section');
const portfolio1 = document.querySelector('.portfolio-templete');
const section5 = document.querySelector('.section5');
// ------------------------------------------------------------------------- //

const handlerFunction = () => {
  const nameToggleHandler = () => {
    names.classList.toggle('name-visible');
  };
  const identityToggleHandler = () => {
    identity.classList.toggle('identity-visible');
  };
  const navToggerDisplayHandler = () => {
    navToggler.classList.toggle('nav-toggler-visible');
  };

  const backgroundLoader = () => {
    setTimeout(() => {
      backImg.classList.toggle('star-visible');
    }, 100);
    setTimeout(() => {
      nameToggleHandler();
    }, 2000);
    setTimeout(() => {
      identityToggleHandler();
    }, 2500);
    setTimeout(() => {
      navToggerDisplayHandler();
    }, 3500);
  };
  window.addEventListener('load', backgroundLoader);
};
handlerFunction();

//-------------------------------------------------------------------//
let toggleHandler = () => {
  navBar.classList.toggle('nav-toggle');
  navToggler.classList.toggle('nav-rotator');
};

navToggler.addEventListener('click', toggleHandler);

// ------------------------------------------------------------------ //

burger.addEventListener('click', () => {
  aboutmeList.classList.toggle('aboutme-list-toggle');
});

// ------------------------------------------------------------------ //

const scrollEveHandler = () => {
  window.addEventListener('scroll', () => {
    if (navBar.clientTop <= window.pageYOffset) {
      navBar.classList.toggle('navbar-bgremover');
      navBar.style.marginTop = 0;
      navBar.style.position = 'sticky';
    }
  });
};
const navTopToggler = () => {
  if (window.outerWidth <= 800) {
    scrollEveHandler();
  }
};
if (window.outerWidth < 800) {
  navTopToggler();
}

// ------------------------------------------------------------------ //

const desktopScrollNumbers = [200, 1700, 3300];
const tabletScrollNumbers = [330, 2500, 3600];
const midtierScreenNumbers = [412, 2770, 4200];
const mobileSrollNumbers = [412, 3214, 4512];

const desktop = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= desktopScrollNumbers[0]) {
      aboutme.classList.add('section-visible');
    }
    if (window.scrollY >= desktopScrollNumbers[1]) {
      const cont = document.querySelector('.section3');
      cont.classList.add('cont-visible');
    }
    if (window.scrollY >= desktopScrollNumbers[2]) {
      section5.classList.add('section5-visible');
    }
  });
};

const tablet = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= tabletScrollNumbers[0]) {
      aboutme.classList.add('section-visible');
    }
    if (window.scrollY >= tabletScrollNumbers[1]) {
      const cont = document.querySelector('.section3');
      cont.classList.add('cont-visible');
    }
    if (window.scrollY >= tabletScrollNumbers[2]) {
      section5.classList.add('section5-visible');
    }
  });
};

const midTierMobileAndTabScreen = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= midtierScreenNumbers[0]) {
      aboutme.classList.add('section-visible');
    }
    if (window.scrollY >= midtierScreenNumbers[1]) {
      const cont = document.querySelector('.section3');
      cont.classList.add('cont-visible');
    }
    if (window.scrollY >= midtierScreenNumbers[2]) {
      section5.classList.add('section5-visible');
    }
  });
};

const mobile = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= mobileSrollNumbers[0]) {
      aboutme.classList.add('section-visible');
    }
    if (window.scrollY >= mobileSrollNumbers[1]) {
      const cont = document.querySelector('.section3');
      cont.classList.add('cont-visible');
    }
    if (window.scrollY >= mobileSrollNumbers[2]) {
      section5.classList.add('section5-visible');
    }
  });
};

if (window.outerWidth >= 1000) {
  desktop();
} else if (window.outerWidth >= 650 && window.outerWidth <= 900) {
  tablet();
} else if (window.outerWidth <= 650 && window.outerWidth >= 400) {
  midTierMobileAndTabScreen();
} else if (window.outerWidth <= 400) {
  mobile();
}
// ------------------------------------------------------------------ //

window.addEventListener('scroll', () => {
  if (window.scrollY >= 530) {
    navToggler.classList.add('toggler-color-changer');
  } else {
    navToggler.classList.remove('toggler-color-changer');
  }
});


const frc = () => {
  console.log('fucntions executed')
}

window.addEventListener('scroll', () => {
  console.log(window.scrollY)
})