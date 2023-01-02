const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)
    
        tabContents.forEach(tc=>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t=>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

const buttonLight = document.querySelector(".ri-moon-line");
const buttonDark = document.querySelector(".ri-sun-line");

buttonLight.addEventListener("click", function () {
    buttonLight.classList.add("hide");
    buttonDark.classList.remove("hide");
    document.body.classList.add("dark-theme");
  });
  
  buttonDark.addEventListener("click", function () {
    buttonLight.classList.remove("hide");
    buttonDark.classList.add("hide");
    document.body.classList.remove("dark-theme");
  });

  const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
  })

  sr.reveal(`.profile__border`)
  sr.reveal(`.profile__name`,{delay:500})
  sr.reveal(`.profile__profession`,{delay:600})
  sr.reveal(`.profile__social`,{delay:700})
  sr.reveal(`.profile__info-group`,{interval:100, delay:700})
  sr.reveal(`.profile__buttons`,{delay:800})
  sr.reveal(`.filters__content`,{delay:900})
  sr.reveal(`.filters`,{delay:1000})