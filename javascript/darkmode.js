function darkMode() {
  var css = document.getElementsByTagName("link")[1];
  var button= document.getElementById("mode");
  if (css.getAttribute("href") == "") {
    css.setAttribute("href", "../CSS/dark.css");
    button.innerText="light";
    
  }
  else{
    css.setAttribute("href","");
    button.innerText="dark"
  }
}
function darkMode1() {
  var css = document.getElementsByTagName("link")[1];
  var button= document.getElementById("mode");
  if (css.getAttribute("href") == "") {
    css.setAttribute("href", "../CSS/dark2.css");
    button.innerText="light";
    
  }
  else{
    css.setAttribute("href","");
    button.innerText="dark"
  }}
