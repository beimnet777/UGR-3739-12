function darkMode() {
  var css = document.getElementsByTagName("link")[1];
  var button= document.getElementById("theme");
  if (css.getAttribute("href") == "") {
    css.setAttribute("href", "../CSS/dark.css");
    button.src="../images/icons/output-onlinepngtools (5).png";
    
  }
  else{
    css.setAttribute("href","");
    button.src="../images/icons/output-onlinepngtools (6).png"
  }
}
function darkMode1() {
  var css = document.getElementsByTagName("link")[1];
  var button= document.getElementById("theme");
  if (css.getAttribute("href") == "") {
    css.setAttribute("href", "../CSS/dark2.css");
    button.src="../images/icons/output-onlinepngtools (5).png";
    
  }
  else{
    css.setAttribute("href","");
    button.src="../images/icons/output-onlinepngtools (6).png"
  }}
