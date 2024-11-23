"use strict";

// Mobiles
document.addEventListener('DOMContentLoaded', function () {
  const mobilesContainer = document.querySelector('.mobiles');
  const dropdownMobiles = document.querySelector('.dropdown-content--mobiles');
  const asideMenu = document.querySelector('.aside-menu');

  mobilesContainer.addEventListener('mouseenter', function () {
    dropdownMobiles.style.display = 'flex';
    dropdownMobiles.style.flexFlow = 'column wrap';
    dropdownMobiles.style.alignContent = 'flex-start';
    dropdownMobiles.style.gap = '30px';
    dropdownMobiles.style.padding = '20px';
    dropdownMobiles.style.width = '895px';
    dropdownMobiles.style.height = '525px';
    asideMenu.style.height = '525px';
    asideMenu.style.borderTopRightRadius = '0px';
    asideMenu.style.borderBottomRightRadius = '0px';
  });

  mobilesContainer.addEventListener('mouseleave', function () {
    if (!dropdownMobiles.matches(':hover')) {
      dropdownMobiles.style.display = 'none';
      asideMenu.style.height = 'initial';
      asideMenu.style.borderRadius = '12px';
    }
  });

  dropdownMobiles.addEventListener('mouseleave', function () {
    dropdownMobiles.style.display = 'none';
    asideMenu.style.height = 'initial';
    asideMenu.style.borderRadius = '12px';
  });
});

// Tabs
document.addEventListener('DOMContentLoaded', function () {
  const tabsContainer = document.querySelector('.tabs');
  const dropdownTabs = document.querySelector('.dropdown-content--tabs');
  const asideMenu = document.querySelector('.aside-menu');

  tabsContainer.addEventListener('mouseenter', function () {
    dropdownTabs.style.display = 'flex';
    dropdownTabs.style.flexFlow = 'column wrap';
    dropdownTabs.style.alignContent = 'flex-start';
    dropdownTabs.style.gap = '30px';
    dropdownTabs.style.padding = '20px';
    dropdownTabs.style.width = '895px';
    dropdownTabs.style.height = '399px';
    asideMenu.style.height = '399px';
    asideMenu.style.borderTopRightRadius = '0px';
    asideMenu.style.borderBottomRightRadius = '0px';
  });

  tabsContainer.addEventListener('mouseleave', function () {
    if (!dropdownTabs.matches(':hover')) {
      dropdownTabs.style.display = 'none';
      asideMenu.style.height = 'initial';
      asideMenu.style.borderRadius = '12px';
    }
  });

  dropdownTabs.addEventListener('mouseleave', function () {
    dropdownTabs.style.display = 'none';
    asideMenu.style.height = 'initial';
    asideMenu.style.borderRadius = '12px';
  });
});

// Laptops
document.addEventListener('DOMContentLoaded', function () {
  const laptopsContainer = document.querySelector('.laptops');
  const dropdownLaptops = document.querySelector('.dropdown-content--laptops');
  const asideMenu = document.querySelector('.aside-menu');

  laptopsContainer.addEventListener('mouseenter', function () {
    dropdownLaptops.style.display = 'flex';
    dropdownLaptops.style.flexFlow = 'column wrap';
    dropdownLaptops.style.alignContent = 'flex-start';
    dropdownLaptops.style.gap = '30px';
    dropdownLaptops.style.padding = '20px';
    dropdownLaptops.style.width = '895px';
    dropdownLaptops.style.height = '588px';
    asideMenu.style.height = '588px';
    asideMenu.style.borderTopRightRadius = '0px';
    asideMenu.style.borderBottomRightRadius = '0px';
  });

  laptopsContainer.addEventListener('mouseleave', function () {
    if (!dropdownLaptops.matches(':hover')) {
      dropdownLaptops.style.display = 'none';
      asideMenu.style.height = 'initial';
      asideMenu.style.borderRadius = '12px';
    }
  });

  dropdownLaptops.addEventListener('mouseleave', function () {
    dropdownLaptops.style.display = 'none';
    asideMenu.style.height = 'initial';
    asideMenu.style.borderRadius = '12px';
  });
});

// Gadgets
document.addEventListener('DOMContentLoaded', function () {
  const gadgetsContainer = document.querySelector('.gadgets');
  const dropdownGadgets = document.querySelector('.dropdown-content--gadgets');
  const asideMenu = document.querySelector('.aside-menu');

  gadgetsContainer.addEventListener('mouseenter', function () {
    dropdownGadgets.style.display = 'flex';
    dropdownGadgets.style.flexFlow = 'column wrap';
    dropdownGadgets.style.alignContent = 'flex-start';
    dropdownGadgets.style.gap = '30px';
    dropdownGadgets.style.padding = '20px';
    dropdownGadgets.style.width = '895px';
    dropdownGadgets.style.height = '745.5px';
    asideMenu.style.height = '745.5px';
    asideMenu.style.borderTopRightRadius = '0px';
    asideMenu.style.borderBottomRightRadius = '0px';
  });

  gadgetsContainer.addEventListener('mouseleave', function () {
    if (!dropdownGadgets.matches(':hover')) {
      dropdownGadgets.style.display = 'none';
      asideMenu.style.height = 'initial';
      asideMenu.style.borderRadius = '12px';
    }
  });

  dropdownGadgets.addEventListener('mouseleave', function () {
    dropdownGadgets.style.display = 'none';
    asideMenu.style.height = 'initial';
    asideMenu.style.borderRadius = '12px';
  });
});

// Audio
document.addEventListener('DOMContentLoaded', function () {
  const audioContainer = document.querySelector('.audio');
  const dropdownAudio = document.querySelector('.dropdown-content--audio');
  const asideMenu = document.querySelector('.aside-menu');

  audioContainer.addEventListener('mouseenter', function () {
    dropdownAudio.style.display = 'flex';
    dropdownAudio.style.flexFlow = 'column wrap';
    dropdownAudio.style.alignContent = 'flex-start';
    dropdownAudio.style.gap = '30px';
    dropdownAudio.style.padding = '20px';
    dropdownAudio.style.width = '895px';
    dropdownAudio.style.height = '483px';
    asideMenu.style.height = '483px';
    asideMenu.style.borderTopRightRadius = '0px';
    asideMenu.style.borderBottomRightRadius = '0px';
  });

  audioContainer.addEventListener('mouseleave', function () {
    if (!dropdownAudio.matches(':hover')) {
      dropdownAudio.style.display = 'none';
      asideMenu.style.height = 'initial';
      asideMenu.style.borderRadius = '12px';
    }
  });

  dropdownAudio.addEventListener('mouseleave', function () {
    dropdownAudio.style.display = 'none';
    asideMenu.style.height = 'initial';
    asideMenu.style.borderRadius = '12px';
  });
});

// Gaming
document.addEventListener('DOMContentLoaded', function () {
  const gamingContainer = document.querySelector('.gaming');
  const dropdownGaming = document.querySelector('.dropdown-content--gaming');
  const asideMenu = document.querySelector('.aside-menu');

  gamingContainer.addEventListener('mouseenter', function () {
    dropdownGaming.style.display = 'flex';
    dropdownGaming.style.flexFlow = 'column wrap';
    dropdownGaming.style.alignContent = 'flex-start';
    dropdownGaming.style.gap = '30px';
    dropdownGaming.style.padding = '20px';
    dropdownGaming.style.width = '895px';
    dropdownGaming.style.height = '483px';
    asideMenu.style.height = '483px';
    asideMenu.style.borderTopRightRadius = '0px';
    asideMenu.style.borderBottomRightRadius = '0px';
  });

  gamingContainer.addEventListener('mouseleave', function () {
    if (!dropdownGaming.matches(':hover')) {
      dropdownGaming.style.display = 'none';
      asideMenu.style.height = 'initial';
      asideMenu.style.borderRadius = '12px';
    }
  });

  dropdownGaming.addEventListener('mouseleave', function () {
    dropdownGaming.style.display = 'none';
    asideMenu.style.height = 'initial';
    asideMenu.style.borderRadius = '12px';
  });
});

// TV
document.addEventListener('DOMContentLoaded', function () {
  const tvContainer = document.querySelector('.tv');
  const dropdownTV = document.querySelector('.dropdown-content--tv');
  const asideMenu = document.querySelector('.aside-menu');

  tvContainer.addEventListener('mouseenter', function () {
    dropdownTV.style.display = 'flex';
    dropdownTV.style.flexFlow = 'column wrap';
    dropdownTV.style.alignContent = 'flex-start';
    dropdownTV.style.gap = '30px';
    dropdownTV.style.padding = '20px';
    dropdownTV.style.width = '895px';
    dropdownTV.style.height = '378px';
    asideMenu.style.height = '378px';
    asideMenu.style.borderTopRightRadius = '0px';
    asideMenu.style.borderBottomRightRadius = '0px';
  });

  tvContainer.addEventListener('mouseleave', function () {
    if (!dropdownTV.matches(':hover')) {
      dropdownTV.style.display = 'none';
      asideMenu.style.height = 'initial';
      asideMenu.style.borderRadius = '12px';
    }
  });

  dropdownTV.addEventListener('mouseleave', function () {
    dropdownTV.style.display = 'none';
    asideMenu.style.height = 'initial';
    asideMenu.style.borderRadius = '12px';
  });
});

// Photo
document.addEventListener('DOMContentLoaded', function () {
  const photoContainer = document.querySelector('.photo');
  const dropdownPhoto = document.querySelector('.dropdown-content--photo');
  const asideMenu = document.querySelector('.aside-menu');

  photoContainer.addEventListener('mouseenter', function () {
    dropdownPhoto.style.display = 'flex';
    dropdownPhoto.style.flexFlow = 'column wrap';
    dropdownPhoto.style.alignContent = 'flex-start';
    dropdownPhoto.style.gap = '30px';
    dropdownPhoto.style.padding = '20px';
    dropdownPhoto.style.width = '895px';
    dropdownPhoto.style.height = '378px';
    asideMenu.style.height = '378px';
    asideMenu.style.borderTopRightRadius = '0px';
    asideMenu.style.borderBottomRightRadius = '0px';
  });

  photoContainer.addEventListener('mouseleave', function () {
    if (!dropdownPhoto.matches(':hover')) {
      dropdownPhoto.style.display = 'none';
      asideMenu.style.height = 'initial';
      asideMenu.style.borderRadius = '12px';
    }
  });

  dropdownPhoto.addEventListener('mouseleave', function () {
    dropdownPhoto.style.display = 'none';
    asideMenu.style.height = 'initial';
    asideMenu.style.borderRadius = '12px';
  });
});

// Tabs Section
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.dropdown--left-content');
  const sections = document.querySelectorAll(
    '.first-button-content, .second-button-content, .third-button-content, .fourth-button-content, .sixth-button-content, .seventh-button-content, .eighth-button-content'
  );

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      const targetClass = button.getAttribute('data-target');

      sections.forEach((section) => {
        section.style.display = section.classList.contains(targetClass) ? 'block' : 'none';
      });

      buttons.forEach((btn) => {
        btn.style.background = 'var(--white-400)';
        btn.style.borderLeft = 'none';
      });

      button.style.background = 'rgba(242, 242, 242, 0.3)';
      button.style.borderLeft = '2px solid var(--orange-main)';
    });
  });
});


const burgerButton = document.querySelector('.burger-menu');
const dropdown = document.querySelector('.dropdown--responsive');
const overlay = document.querySelector('.overlay');

burgerButton.addEventListener('click', () => {
  // Toggle the dropdown visibility
  dropdown.classList.toggle('active');
  
  // Toggle the overlay visibility
  overlay.style.display = dropdown.classList.contains('active') ? 'block' : 'none';
});
overlay.addEventListener('click', () => {
  dropdown.classList.remove('active');
  overlay.style.display = 'none';
});
