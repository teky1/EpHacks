window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementsByTagName("nav")[0].classList.remove("navbarTransparent");
  } else {
    document.getElementsByTagName("nav")[0].classList.add("navbarTransparent");
  }
}