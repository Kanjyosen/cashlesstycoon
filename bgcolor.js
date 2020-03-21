function ChangeColor(color){
  var colorcode = "000000";
  var textcolor = "000000";
  if (color == "black"){
    colorcode = "#000000";
    textcolor = "#ffffff";
  }else if(color == "blue"){
    colorcode = "#1e90ff";
    textcolor = "#000000";
  }else if(color == "red"){
    colorcode = "#b22222";
    textcolor = "#000000";
  }else if(color == "green"){
    colorcode = "#00fa9a"
    textcolor = "#000000";
  }
  document.getElementById("body2").style.backgroundColor = colorcode;
  document.getElementById("body2").style.color = textcolor;
}
