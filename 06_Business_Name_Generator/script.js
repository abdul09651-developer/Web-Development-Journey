function adjectiveGenerator() {
  let random = Math.floor(Math.random()*3);
  if(random==0){
    return "Crazy"
  }else if(random==1){
    return "Amazing"
  }else if(random==2){
    return "Fire"
  }
}
function ShopNameGenerator() {
  let random = Math.floor(Math.random()*3);
  if(random==0){
    return "Engine"
  }else if(random==1){
    return "Foods"
  }else if(random==2){
    return "Garments"
  }
}
function LastWordGenerator() {
  let random = Math.floor(Math.random()*3);
  if(random==0){
    return "Bros"
  }else if(random==1){
    return "Limited"
  }else if(random==2){
    return "Hub"
  }
}
function BusinessNameGenerator(){
  let BusinessName = adjectiveGenerator() +" "+ShopNameGenerator()+" "+ LastWordGenerator();
  document.getElementById("BusinessName").innerHTML= BusinessName;

}
BusinessNameGenerator()



// console.log("Your Business Name: ",adjectiveGenerator() ,ShopNameGenerator(), LastWordGenerator())