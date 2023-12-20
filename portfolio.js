function menulist(){
    let a=document.getElementById("list-block")
    if(a.style.display === "none"){
        a.style.display="block";
    }else{
        a.style.display="none";
    }
};

let a = document.getElementById("Resume")
function clicked(val) {
  if (val === "Details") {
    let temp = "<div class='card1' onclick='clicked('details')'>"
    temp += "<div class='text1'>";
    temp += "<h3>Name :</h3>";
    temp += "<h1>MUTHUPANDI M</h1>";
    temp += "<h3>Date Of Birth :</h3>";
    temp += "<h1>11/07/2002</h1>";
    temp += "<h3>Email :</h3>";
    temp += "<h1>muthu@gmail.com</h1>";
    temp += "</div>";
    temp += "</div>";
    a.innerHTML = temp;
  } else if (val === "Skill") {
    let temp = "<div class='card2' onclick='clicked('skill')'>"
    temp += "<div class='text2'>";
    temp += " <h2><i class='fa-brands fa-html5'></i> HTML</h2>";
    temp += " <h2><i class='fa-brands fa-css3-alt'></i> Css</h2>";
    temp += " <h2><i class='fa-brands fa-js'></i> Java Script</h2>";
    temp += "<h2><i class='fa-brands fa-python'></i> Python</h2>";
    temp += "</div>";
    temp += "</div>";
    a.innerHTML = temp;
  } else if (val=== "Education"){
    let temp = " <div class='card3' onclick='clicked('education')'>"
    temp += "<div class='text3'>";
    temp += "<h4 class=>SSLC - HSC :</h4>";
    temp += "<h3>SOURASHTRA BOYS HIGER SECONDARY SCHOOL .</h3>";
    temp += "<h3>PERCENTAGE : 79% & 43%</h3>";
    temp += "<h4>COLLEGE :</h4>";
    temp += "<h3>YADAVA COLLEGE-MADURAI .</h3>";
    temp += "<h3>PERCENTAGE : 70%</h3>";
    temp += " </div>"
    temp += "</div>"
    a.innerHTML = temp;
  } else{
    let temp ="<div class='card4' onclick='clicked('tools')''>"
    temp += "<div class='text4'>"
    temp += "<h2><i class='fa-brands fa-python'></i>Pycharm</h2>"
    temp += "<h2><i class='fa-brands fa-vuejs'></i> Visual Studio</h2>"
    a.innerHTML = temp;
  }
}
clicked("Details");