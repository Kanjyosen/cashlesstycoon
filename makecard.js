alert("Hello");

function place(id){
  document.getElementById(id).style.visibility="visible";
}

function unplace(id){
  document.getElementById(id).style.visibility="hidden";
}



function change(id1, id2){
  place(id1);
  unplace(id2);
}

function switching(id){
  if (document.getElementById(id).style.visibility == "hidden"){
    place(id);
  }else{
    unplace(id);
  }
  search();
}

function writetext(id, txt){
  document.getElementById(id).innerText = txt;
}

function search(){
  if (document.getElementById("ic_chip").style.visibility == "hidden"){
    if (document.getElementById("ic_touch").style.visibility == "hidden"){
      if (document.getElementById("mag_stripe").style.visibility == "hidden"){
        writetext("text", "データが格納できません。こんなの世に出せません。");
      }else{
        writetext("text", "");
      }
    }else{
      writetext("text", "");
    }
  }else{
    writetext("text", "");
  }
}

function toggle(id_place, id_unplace1, id_unplace2){
  place(id_place);
  unplace(id_unplace1);
  unplace(id_unplace2);
}
