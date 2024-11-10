"use strict";


//mobiles
document.addEventListener('DOMContentLoaded', function () {
  const mobilesContainer = document.querySelector('.mobiles')
  const dropdownMobiles = document.querySelector('.dropdown-content--mobiles')
  const asideMenu = document.querySelector('.aside-menu')

  mobilesContainer.addEventListener('mouseenter', function () {
    dropdownMobiles.style.display = 'flex'
    dropdownMobiles.style.flexFlow = 'column wrap'
    dropdownMobiles.style.alignContent = 'flex-start'
    dropdownMobiles.style.gap = '30px'
    dropdownMobiles.style.padding = '20px'
    // dropdownMobiles.style.width = 'calc(100% - 246px)'
    dropdownMobiles.style.width = '895px'
    dropdownMobiles.style.height = '525px'
    asideMenu.style.height = '525px'
    asideMenu.style.borderTopRightRadius = '0px'
    asideMenu.style.borderBottomRightRadius = '0px'
  })

  mobilesContainer.addEventListener('mouseleave', function () {
    if (!dropdownMobiles.matches(':hover')) {
      dropdownMobiles.style.display = 'none'
      asideMenu.style.height = 'initial'
      asideMenu.style.borderRadius = '12px'
    }
  })

  mobilesContainer.addEventListener('mouseenter', function () {
    dropdownMobiles.style.display = 'flex'
  })

  dropdownMobiles.addEventListener('mouseleave', function () {
    dropdownMobiles.style.display = 'none'
    asideMenu.style.height = 'initial'
    asideMenu.style.borderRadius = '12px'
  })
})

//tabs
document.addEventListener('DOMContentLoaded', function () {
  const tabsContainer = document.querySelector('.tabs')
  const dropdownTabs = document.querySelector('.dropdown-content--tabs')
  const asideMenu = document.querySelector('.aside-menu')

  tabsContainer.addEventListener('mouseenter', function () {
    dropdownTabs.style.display = 'flex'
    dropdownTabs.style.flexFlow = 'column wrap'
    dropdownTabs.style.alignContent = 'flex-start'
    dropdownTabs.style.gap = '30px'
    dropdownTabs.style.padding = '20px'
    // dropdownTabs.style.width = 'calc(100% - 246px)'
    dropdownTabs.style.width = '895px'
    dropdownTabs.style.height = '399px'
    asideMenu.style.height = '399px'
    asideMenu.style.borderTopRightRadius = '0px'
    asideMenu.style.borderBottomRightRadius = '0px'
  })

  tabsContainer.addEventListener('mouseleave', function () {
    if (!dropdownTabs.matches(':hover')) {
      dropdownTabs.style.display = 'none'
      asideMenu.style.height = 'initial'
      asideMenu.style.borderRadius = '12px'
    }
  })

  tabsContainer.addEventListener('mouseenter', function () {
    dropdownTabs.style.display = 'flex'
  })

  dropdownTabs.addEventListener('mouseleave', function () {
    dropdownTabs.style.display = 'none'
    asideMenu.style.height = 'initial'
    asideMenu.style.borderRadius = '12px'
  })
})

//laptops
document.addEventListener('DOMContentLoaded', function () {
  const laptopsContainer = document.querySelector('.laptops')
  const dropdownLaptops = document.querySelector('.dropdown-content--laptops')
  const asideMenu = document.querySelector('.aside-menu')

  laptopsContainer.addEventListener('mouseenter', function () {
    dropdownLaptops.style.display = 'flex'
    dropdownLaptops.style.flexFlow = 'column wrap'
    dropdownLaptops.style.alignContent = 'flex-start'
    dropdownLaptops.style.gap = '30px'
    dropdownLaptops.style.padding = '20px'
    // dropdownLaptops.style.width = 'calc(100% - 246px)'
    dropdownLaptops.style.width = '895px'
    dropdownLaptops.style.height = '588px'
    asideMenu.style.height = '588px'
    asideMenu.style.borderTopRightRadius = '0px'
    asideMenu.style.borderBottomRightRadius = '0px'
  })

  laptopsContainer.addEventListener('mouseleave', function () {
    if (!dropdownLaptops.matches(':hover')) {
      dropdownLaptops.style.display = 'none'
      asideMenu.style.height = 'initial'
      asideMenu.style.borderRadius = '12px'
    }
  })

  laptopsContainer.addEventListener('mouseenter', function () {
    dropdownLaptops.style.display = 'flex'
  })

  dropdownLaptops.addEventListener('mouseleave', function () {
    dropdownLaptops.style.display = 'none'
    asideMenu.style.height = 'initial'
    asideMenu.style.borderRadius = '12px'
  })
})

//gadgets
document.addEventListener('DOMContentLoaded', function () {
  const gadgetsContainer = document.querySelector('.gadgets')
  const dropdownGadgets = document.querySelector('.dropdown-content--gadgets')
  const asideMenu = document.querySelector('.aside-menu')

  gadgetsContainer.addEventListener('mouseenter', function () {
    dropdownGadgets.style.display = 'flex'
    dropdownGadgets.style.flexFlow = 'column wrap'
    dropdownGadgets.style.alignContent = 'flex-start'
    dropdownGadgets.style.gap = '30px'
    dropdownGadgets.style.padding = '20px'
    // dropdownGadgets.style.width = 'calc(100% - 246px)'
    dropdownGadgets.style.width = '895px'
    dropdownGadgets.style.height = '745.5px'
    asideMenu.style.height = '745.5px'
    asideMenu.style.borderTopRightRadius = '0px'
    asideMenu.style.borderBottomRightRadius = '0px'
  })

  gadgetsContainer.addEventListener('mouseleave', function () {
    if (!dropdownGadgets.matches(':hover')) {
      dropdownGadgets.style.display = 'none'
      asideMenu.style.height = 'initial'
      asideMenu.style.borderRadius = '12px'
    }
  })

  gadgetsContainer.addEventListener('mouseenter', function () {
    dropdownGadgets.style.display = 'flex'
  })

  dropdownGadgets.addEventListener('mouseleave', function () {
    dropdownGadgets.style.display = 'none'
    asideMenu.style.height = 'initial'
    asideMenu.style.borderRadius = '12px'
  })
})

//audio
document.addEventListener('DOMContentLoaded', function () {
  const audioContainer = document.querySelector('.audio')
  const dropdownAudio = document.querySelector('.dropdown-content--audio')
  const asideMenu = document.querySelector('.aside-menu')

  audioContainer.addEventListener('mouseenter', function () {
    dropdownAudio.style.display = 'flex'
    dropdownAudio.style.flexFlow = 'column wrap'
    dropdownAudio.style.alignContent = 'flex-start'
    dropdownAudio.style.gap = '30px'
    dropdownAudio.style.padding = '20px'
    // dropdownAudio.style.width = 'calc(100% - 246px)'
    dropdownAudio.style.width = '895px'
    dropdownAudio.style.height = '483px'
    asideMenu.style.height = '483px'
    asideMenu.style.borderTopRightRadius = '0px'
    asideMenu.style.borderBottomRightRadius = '0px'
  })

  audioContainer.addEventListener('mouseleave', function () {
    if (!dropdownAudio.matches(':hover')) {
      dropdownAudio.style.display = 'none'
      asideMenu.style.height = 'initial'
      asideMenu.style.borderRadius = '12px'
    }
  })

  audioContainer.addEventListener('mouseenter', function () {
    dropdownAudio.style.display = 'flex'
  })

  dropdownAudio.addEventListener('mouseleave', function () {
    dropdownAudio.style.display = 'none'
    asideMenu.style.height = 'initial'
    asideMenu.style.borderRadius = '12px'
  })
})

//gaming
document.addEventListener('DOMContentLoaded', function () {
  const gamingContainer = document.querySelector('.gaming')
  const dropdownGaming = document.querySelector('.dropdown-content--gaming')
  const asideMenu = document.querySelector('.aside-menu')

  gamingContainer.addEventListener('mouseenter', function () {
    dropdownGaming.style.display = 'flex'
    dropdownGaming.style.flexFlow = 'column wrap'
    dropdownGaming.style.alignContent = 'flex-start'
    dropdownGaming.style.gap = '30px'
    dropdownGaming.style.padding = '20px'
    // dropdownGaming.style.width = 'calc(100% - 246px)'
    dropdownGaming.style.width = '895px'
    dropdownGaming.style.height = '483px'
    asideMenu.style.height = '483px'
    asideMenu.style.borderTopRightRadius = '0px'
    asideMenu.style.borderBottomRightRadius = '0px'
  })

  gamingContainer.addEventListener('mouseleave', function () {
    if (!dropdownGaming.matches(':hover')) {
      dropdownGaming.style.display = 'none'
      asideMenu.style.height = 'initial'
      asideMenu.style.borderRadius = '12px'
    }
  })

  gamingContainer.addEventListener('mouseenter', function () {
    dropdownGaming.style.display = 'flex'
  })

  dropdownGaming.addEventListener('mouseleave', function () {
    dropdownGaming.style.display = 'none'
    asideMenu.style.height = 'initial'
    asideMenu.style.borderRadius = '12px'
  })
})

//tv
document.addEventListener('DOMContentLoaded', function () {
  const tvContainer = document.querySelector('.tv')
  const dropdownTV = document.querySelector('.dropdown-content--tv')
  const asideMenu = document.querySelector('.aside-menu')

  tvContainer.addEventListener('mouseenter', function () {
    dropdownTV.style.display = 'flex'
    dropdownTV.style.flexFlow = 'column wrap'
    dropdownTV.style.alignContent = 'flex-start'
    dropdownTV.style.gap = '30px'
    dropdownTV.style.padding = '20px'
    // dropdownTV.style.width = 'calc(100% - 246px)'
    dropdownTV.style.width = '895px'
    dropdownTV.style.height = '378px'
    asideMenu.style.height = '378px'
    asideMenu.style.borderTopRightRadius = '0px'
    asideMenu.style.borderBottomRightRadius = '0px'
  })

  tvContainer.addEventListener('mouseleave', function () {
    if (!dropdownTV.matches(':hover')) {
      dropdownTV.style.display = 'none'
      asideMenu.style.height = 'initial'
      asideMenu.style.borderRadius = '12px'
    }
  })

  tvContainer.addEventListener('mouseenter', function () {
    dropdownTV.style.display = 'flex'
  })

  dropdownTV.addEventListener('mouseleave', function () {
    dropdownTV.style.display = 'none'
    asideMenu.style.height = 'initial'
    asideMenu.style.borderRadius = '12px'
  })
})

//photo
document.addEventListener('DOMContentLoaded', function () {
  const photoContainer = document.querySelector('.photo')
  const dropdownPhoto = document.querySelector('.dropdown-content--photo')
  const asideMenu = document.querySelector('.aside-menu')

  photoContainer.addEventListener('mouseenter', function () {
    dropdownPhoto.style.display = 'flex'
    dropdownPhoto.style.flexFlow = 'column wrap'
    dropdownPhoto.style.alignContent = 'flex-start'
    dropdownPhoto.style.gap = '30px'
    dropdownPhoto.style.padding = '20px'
    dropdownPhoto.style.width = '895px'
    dropdownPhoto.style.height = '378px'
    asideMenu.style.height = '378px'
    asideMenu.style.borderTopRightRadius = '0px'
    asideMenu.style.borderBottomRightRadius = '0px'
  })

  photoContainer.addEventListener('mouseleave', function () {
    if (!dropdownPhoto.matches(':hover')) {
      dropdownPhoto.style.display = 'none'
      asideMenu.style.height = 'initial'
      asideMenu.style.borderRadius = '12px'
    }
  })

  photoContainer.addEventListener('mouseenter', function () {
    dropdownPhoto.style.display = 'flex'
  })

  dropdownPhoto.addEventListener('mouseleave', function () {
    dropdownPhoto.style.display = 'none'
    asideMenu.style.height = 'initial'
    asideMenu.style.borderRadius = '12px'
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.dropdown--left-content')
  const allSections = document.querySelectorAll(
    '.first-button-content, .second-button-content, .third-button-content, .fourth-button-content, .sixth-button-content, .seventh-button-content, .eighth-button-content'
  )

  function resetAll() {
    allSections.forEach(function (section) {
      section.style.display = 'none'
    })

    buttons.forEach(function (button) {
      button.style.background = 'var(--white-400)'
      button.style.borderLeft = 'none'
    })

    document.getElementById('mobilePhonesButton').onclick =
      function sectionMobiles() {
        resetAll()
        document
          .querySelectorAll('.first-button-content')
          .forEach(function (section) {
            section.style.display = 'block' // Show the mobile section
          })
        document.getElementById('mobilePhonesButton').style.background =
          'rgba(242, 242, 242, 0.3)'
        document.getElementById('mobilePhonesButton').style.borderLeft =
          '2px solid var(--orange-main)'
      }
  }

  document.getElementById('tabsButton').onclick = function sectionTabs() {
    resetAll()
    document
      .querySelectorAll('.second-button-content')
      .forEach(function (section) {
        section.style.display = 'block'
      })
    document.getElementById('tabsButton').style.background =
      'rgba(242, 242, 242, 0.3)'
    document.getElementById('tabsButton').style.borderLeft =
      '2px solid var(--orange-main)'
  }

  document.getElementById('laptopsButton').onclick = function sectionLaptops() {
    resetAll()
    document
      .querySelectorAll('.third-button-content')
      .forEach(function (section) {
        section.style.display = 'block'
      })
    document.getElementById('laptopsButton').style.background =
      'rgba(242, 242, 242, 0.3)'
    document.getElementById('laptopsButton').style.borderLeft =
      '2px solid var(--orange-main)'
  }

  document.getElementById('gadgetsButton').onclick = function sectionGadgets() {
    resetAll()
    document
      .querySelectorAll('.fourth-button-content')
      .forEach(function (section) {
        section.style.display = 'block'
      })
    document.getElementById('gadgetsButton').style.background =
      'rgba(242, 242, 242, 0.3)'
    document.getElementById('gadgetsButton').style.borderLeft =
      '2px solid var(--orange-main)'
  }

  document.getElementById('audioButton').onclick = function sectionAudio() {
    resetAll()
    document
      .querySelectorAll('.fifth-button-content')
      .forEach(function (section) {
        section.style.display = 'block'
      })
    document.getElementById('audioButton').style.background =
      'rgba(242, 242, 242, 0.3)'
    document.getElementById('audioButton').style.borderLeft =
      '2px solid var(--orange-main)'
  }

  document.getElementById('gamingButton').onclick = function sectionGaming() {
    resetAll()
    document
      .querySelectorAll('.sixth-button-content')
      .forEach(function (section) {
        section.style.display = 'block'
      })
    document.getElementById('gamingButton').style.background =
      'rgba(242, 242, 242, 0.3)'
    document.getElementById('gamingButton').style.borderLeft =
      '2px solid var(--orange-main)'
  }

  document.getElementById('tvButton').onclick = function sectionTv() {
    resetAll()
    document
      .querySelectorAll('.seventh-button-content')
      .forEach(function (section) {
        section.style.display = 'block'
      })
    document.getElementById('tvButton').style.background =
      'rgba(242, 242, 242, 0.3)'
    document.getElementById('tvButton').style.borderLeft =
      '2px solid var(--orange-main)'
  }

  document.getElementById('photoButton').onclick = function sectionPhoto() {
    resetAll()
    document
      .querySelectorAll('.eighth-button-content')
      .forEach(function (section) {
        section.style.display = 'block'
      })
    document.getElementById('photoButton').style.background =
      'rgba(242, 242, 242, 0.3)'
    document.getElementById('photoButton').style.borderLeft =
      '2px solid var(--orange-main)'
  }
})



// fetch data
async function generateNavigation() {
  try {
    const response = await fetch("productList.json"); // Changed path and data file name
    const categories = await response.json();

    const navContainer = document.querySelector(".navigation"); // Changed element selector
    let navContent = "";

    categories.forEach((category) => {
      let subNav = "";

      if (category.subcategories && category.subcategories.length > 0) {
        subNav = category.subcategories
          .map((subCategory) => {
            return `
              <li class="sub-nav-item">
                <h5 class="sub-nav-title">${subCategory.name}</h5>
                <ul class="sub-nav-list">
                  ${
                    subCategory.items
                      ? subCategory.items
                          .map((item) => `<li><a href="${item.url}">${item.name}</a></li>`)
                          .join("")
                      : '<li><a href="#">No items available</a></li>'
                  }
                </ul>
              </li>
            `;
          })
          .join("");
      }

      navContent += `
        <li class="nav-item">
          <button class="nav-button">
            <img class="nav-icon" src="${category.iconUrl}" alt="${category.name}" /> <span class="nav-title">${category.name}</span>
          </button>
          ${subNav}
        </li>
      `;
    });

    navContainer.innerHTML = navContent;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}

export { generateNavigation };

function fetchAndDisplayCategories() {
  const categoryContainer = document.getElementById('categoryContainer');

  fetch('productList.json')
    .then(response => response.json())
    .then(categories => renderCategoryList(categories))
    .catch(error => console.error('Error fetching categories:', error));
}

function renderCategoryList(categories) {
  let categoryListHTML = '';
  categories.forEach((category, index) => {
    const isActive = index === 0 ? 'active-category' : '';
    categoryListHTML += createCategoryItem(category, isActive);
  });
  categoryContainer.innerHTML = categoryListHTML;
}

function createCategoryItem(category, isActiveClass) {
  const iconUrl = category.iconUrl || 'default-icon.png';
  return `
    <li class="category-item ${isActiveClass}">
      <img class="category-icon" src="${iconUrl}" alt="${category.name}" />
      <span class="category-title">${category.name}</span>
    </li>
  `;
}