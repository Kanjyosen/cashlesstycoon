var anti = 0;
var fans = 0;
var buffer_visicheck = "hidden";
var ic_touch_visi = "hidden";
var ic_chip = "hidden";
var mag_visi = "hidden";
var score = 0;
var comment = "はっはっは私があーさんだ";

function evalucation(){
  alert("評価開始");
  //嫌悪からまとめるのは危険だぜ☆

  var shell = document.getElementById("variables");
  var radioNodeList = shell.tesuuryou_type;
  var tesutype = radioNodeList.value;
  anti = 0;
  anti = anti + document.getElementById("tesuuryou").value;
  if (tesutype == "standard"){
    anti = anti * 0.5;
  }else if(tesutype == "jihi"){
    anti = anti * 0.1;
  }else if(tesutype == "hell"){
    anti = anti * 0.9;
  }
  var radioNodeList = shell.debitorcredit;
  var cardtype = radioNodeList.value;

  if (cardtype == "debit"){
    anti = anti * 0.2;
  }else if(cardtype == "credit"){
    anti = anti * 0.3;
  }

  anti = anti * (equips_cost / 100);
  fans = 0;
  //そうさ。ポジティブな意見にも耳を傾ける時だ。
  var limits = document.getElementById("limit").value;
  fans = limits / 10000000;
  searchcardtype();

  if (ic_touch_visi == "hidden"){
    fans = parseInt(fans) + 0;
  }else if (ic_touch_visi == "visible") {
    fans = parseInt(fans) + 400;
  }
  if (ic_chip_visi == "hidden"){
    fans = parseInt(fans) + 0;
  }else if (ic_chip_visi == "visible") {
    fans = parseInt(fans) + 650;
  }
  if (ic_touch_visi == "hidden"){
    fans = parseInt(fans) + 0;
  }else if (ic_touch_visi == "visible") {
    fans = parseInt(fans) + 150;
  }
  fans = parseInt(fans) - banks_cost;
  score = fans - (parseInt(anti) * 1.0);
  score = Math.round(parseInt(score) * 100) / 100;
  if (parseInt(score) >= 1300){
    comment = "非常に素晴らしい。怖い。赤い部屋よりも。";
  }else if(parseInt(score) >= 1000){
    comment = "ちゃんとしている常識人。";
  }else if (parseInt(score) >= 700) {
    comment = "もしかすれば奇才カードだったのかも...?";
  }else if (parseInt(score) >= 500) {
    comment = "うーんこの";
  }else{
    comment = "なああよに助けを乞うべきだと思います。";
  }
  alert("あなたのスコアは" + score + "です。" + comment);
}
function searchcardtype(){
  visicheck("ic_touch");
  ic_touch_visi = buffer_visicheck;
  visicheck("ic_chip");
  ic_chip_visi = buffer_visicheck;
  visicheck("mag_stripe");
  mag_visi = buffer_visicheck;
}
function visicheck(id){
  buffer_visicheck = document.getElementById(id).style.visibility
}
