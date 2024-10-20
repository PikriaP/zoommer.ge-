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

// document.getElementById('mobilePhonesButton').onclick =
//   function sectionMobiles() {
//     var brandsSection = document.getElementsByClassName('dropdown--right-1')

// Check if the brands section is currently visible
// if (
//   brandsSection.style.display === 'none' ||
//   brandsSection.style.display === ''
// ) {
//   // Show the brands section
//   brandsSection.style.display = 'block'
//   brandsSection.style.background = 'rgba(242, 242, 242, 0.3)'
//   brandsSection.style.borderLeft = '2px solid var(--orange-main)'
// } else {
//   // Hide the brands section
//   brandsSection.style.display = 'none'
// }

// if (brandsSection) {
//   brandsSection.style.background = 'rgba(242, 242, 242, 0.3)'
//   brandsSection.style.borderLeft = '2px solid var(--orange-main)'
// }
// }

// Function to show the mobiles section and hide the tablets section
document.getElementById('mobilePhonesButton').onclick =
  function sectionMobiles() {
    document.getElementById('mobileSection').style.display = 'block' // Show mobiles section
    document.getElementById('tabletsSection').style.display = 'none' // Hide tablets section
  }

// Function to show the tablets section and hide the mobiles section
document.getElementById('tabsButton').onclick = function () {
  document.getElementById('mobileSection').style.display = 'none' // Hide mobiles section
  document.getElementById('tabletsSection').style.display = 'block' // Show tablets section
}
