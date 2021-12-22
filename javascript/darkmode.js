function darkMode() {
  var css = document.getElementsByTagName("link")[2];
  var button = document.getElementById("theme");
  if (css.getAttribute("href") == "") {
    css.setAttribute("href", "CSS/home.css");
    button.src = "images/icons/output-onlinepngtools (6).png";

  }
  else {
    css.setAttribute("href", "");
    button.src = "images/icons/output-onlinepngtools (5).png"
  }
}
function darkMode1() {
  var css = document.getElementsByTagName("link")[1];
  var button = document.getElementById("theme");
  if (css.getAttribute("href") == "") {
    css.setAttribute("href", "../CSS/dark2.css");
    button.src = "../images/icons/output-onlinepngtools (5).png";

  }
  else {
    css.setAttribute("href", "");
    button.src = "../images/icons/output-onlinepngtools (6).png"
  }
}
const butn = document.getElementById("burger");
const nav = document.getElementsByTagName("nav")[0]
function toggler() {
  butn.addEventListener("click", () => {
    nav.classList.toggle("toggle");
  });

}
toggler();
