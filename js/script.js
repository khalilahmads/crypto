// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 115 ||
    document.documentElement.scrollTop > 115
  ) {
    document.getElementById("sticky-header").style.top = "0";
  } else {
    document.getElementById("sticky-header").style.top = "-115px";
  }
}



function openSearch() {
  document.getElementById("myOverlay").style.height = "100%";
  document.getElementById("full-content").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.height = "0";
  document.getElementById("full-content").style.display = "none";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "360px";
  document.getElementById("mySidenav-2").style.width = "100%";
  document.getElementById("mySidenav-3").style.height = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav-2").style.width = "0";
  document.getElementById("mySidenav-3").style.height = "0";
}























