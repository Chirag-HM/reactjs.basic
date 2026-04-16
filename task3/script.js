function counter() {
   let count = 0;
   return function(){
      count++;
      console.log(count);
      document.getElementById("count").innerText = count;
       };
}

const counter1 =counter();
document.getElementById("btn").addEventListener("click",counter1);
   
