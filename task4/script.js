document.getElementById("btn").addEventListener("click",greet);
function greet(){
    const name = document.getElementById("name").value;
    document.getElementById("result").innerText = "Hello " + name;
}