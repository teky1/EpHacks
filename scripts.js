window.onscroll = function() {scrollUpdate()};
let expanded = false;

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navLinks')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
  l.addEventListener('click', () => {
    if(expanded) {
      bsCollapse.toggle();
      expanded = !expanded;
    }
  });
})

function expandHamburger() {
  expanded = !expanded;
  if(expanded) {
    document.getElementsByTagName("nav")[0].classList.remove("navbarTransparent");
  }
  scrollUpdate();
}

function scrollUpdate() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementsByTagName("nav")[0].classList.remove("navbarTransparent");
  } else if(!expanded){
    document.getElementsByTagName("nav")[0].classList.add("navbarTransparent");
  }
}