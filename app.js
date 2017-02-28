window.onload = ()=>{
  console.log("Hello!");

  var OptionsButton = document.getElementById("menuExpand");
  var OptionsToggle = false
  OptionsButton.addEventListener("click", ()=>{
    if(OptionsToggle) {
      OptionsToggle = false;
      document.getElementsByTagName("aside")[0].classList = "";
    } else {
      OptionsToggle = true;
      document.getElementsByTagName("aside")[0].classList = "hide";
    }
    
  });
}