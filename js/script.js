'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

 

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


/*// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}
*/



// fetch projects start
function getProjects() {
  return fetch("projects.json")
      .then(response => response.json())
      .then(data => {
          return data
      });
}


function showProjects(projects) {
  let projectsContainer = document.querySelector(".work .box-container");
  let projectsHTML = "";
  projects.forEach(project => {
      projectsHTML += `
      <div class="grid-item ${project.category}">
      <div class="box tilt" style="">
    <img draggable="false" src="./image/${project.image}.png" alt="project" />
    <div class="content">
      <div class="tag">
      <h3>${project.name}</h3>
      </div>
      <div class="desc">
        <p>${project.desc}</p>
        <div class="btns">
          <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
          <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
        </div>
      </div>
    </div>
  </div>
  </div>`
  });
  projectsContainer.innerHTML = projectsHTML;

  // vanilla tilt.js
  // VanillaTilt.init(document.querySelectorAll(".tilt"), {
  //     max: 20,
  // });
  // // vanilla tilt.js  

  // /* ===== SCROLL REVEAL ANIMATION ===== */
  // const srtop = ScrollReveal({
  //     origin: 'bottom',
  //     distance: '80px',
  //     duration: 1000,
  //     reset: true
  // });

  // /* SCROLL PROJECTS */
  // srtop.reveal('.work .box', { interval: 200 });

  // isotope filter products
  var $grid = $('.box-container').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      masonry: {
          columnWidth: 200
      }
  });

  // filter items on button click
  $('.button-group').on('click', 'button', function () {
      $('.button-group').find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
  });
}

getProjects().then(data => {
  showProjects(data);
})
// fetch projects end
//skills//

async function fetchData(type = "skills") {
  let response
  type === "skills" ?
      response = await fetch("skills.json")
      :
      response = await fetch("./projects/projects.json")
  const data = await response.json();
  return data;
}
function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach(skill => {
      skillHTML += `
      <div class="bar">
            <div class="info">
              <img src=${skill.icon} alt="skill" />
              <span>${skill.name}</span>
            </div>
          </div>`
  });
  skillsContainer.innerHTML = skillHTML;
}


fetchData().then(data => {
  showSkills(data);
});

/* SCROLL SKILLS 
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });
*/

/* cartificate*/ 

async function fetchData1(type = "cartificate") {
  let responses
  type === "cartificate" ?
      responses = await fetch("cartificate.json")
      :
      responses = await fetch("skills.json")
  const datat = await responses.json();
  return datat;
}
function showcartificate(cartificate) {
  let cartificateContainer = document.getElementById("cartificateContainer");
  let cartificateHTML = "";
  cartificate.forEach(cartificate => {
    cartificateHTML += `
      <div class="bar">
            <div class="info">
              <img src=${cartificate.image} alt="cartificate" />
              <span>${cartificate.name}</span>
            </div>
          </div>`
  });
  cartificateContainer.innerHTML = cartificateHTML;
}

fetchData1().then(datat => {
  showcartificate(datat);
});




// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


























































































/*
/*
{
    "name": "MySQL",
    "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
},
{
    "name": "ReactJS",
    "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
},
{
    "name": "Redux",
    "icon": "https://img.icons8.com/color/48/000000/redux.png"
},

{
    "name": "ExpressJS",
    "icon": "https://img.icons8.com/fluency/48/000000/node-js.png"
},
{
    "name": "NodeJS",
    "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
}*/