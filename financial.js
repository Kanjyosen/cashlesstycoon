var equips_cost = 0;
var banks_cost = 0;
var ic_touch_cost = 0;
var mag_stripe_cost = 0;
var ic_chip_cost = 0;
var total_cost = 0;
function writetext(id, txt){
  document.getElementById(id).innerText = txt;
}

function financial(){
  total_cost = parseInt(equips_cost) + parseInt(banks_cost);
  writetext("costs", "合計:" + total_cost);
}

function changecost(id){
  if(id == "sammachi"){
    banks_cost = 200;
  }else if (id == "sangoechigo") {
    banks_cost = 400;
  }else if (id == "west") {
    banks_cost = 0;
  }else if (id == "none"){
    //meow
  }
  if(document.getElementById("ic_touch").style.visibility == "hidden"){
    ic_touch_cost = 0;
  }else if (document.getElementById("ic_touch").style.visibility == "visible") {
    ic_touch_cost = 150;
  }
  if(document.getElementById("mag_stripe").style.visibility == "hidden"){
    mag_stripe_cost = 0;
  }else if (document.getElementById("mag_stripe").style.visibility == "visible") {
    mag_stripe_cost = 70;
  }
  if(document.getElementById("ic_chip").style.visibility == "hidden"){
    ic_chip_cost = 0;
  }else if (document.getElementById("ic_chip").style.visibility == "visible") {
    ic_chip_cost = 120;
  }
  equips_cost = parseInt(ic_touch_cost) + parseInt(mag_stripe_cost) + parseInt(ic_chip_cost);
  financial();
}
