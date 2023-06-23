let togglerHeaderBtn = document.querySelector("header .container i");
let ulLinks = document.querySelector("header .container ul");

window.onresize = function () {
  if (window.matchMedia("(max-width: 991px)").matches) {
    ulLinks.classList.add("colsed");
  } else {
    ulLinks.classList.remove("colsed");
  }
};

togglerHeaderBtn.onclick = function () {
  ulLinks.classList.toggle("colsed");
};
