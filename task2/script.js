function calculategst(price) {
   return price * 0.18;
}
document.getElementById("btn").addEventListener("click", function(){
   let price = document.getElementById("price").value;
   let result = calculategst(price);
   document.getElementById("").innerText = "total price :"  +(number(result)+ number(price));
})