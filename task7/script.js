document.getElementById("change color").addEventListener("click", changeColor);
function changeColor(){
    let color="#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = color
    document.getElementById("colorchange").innerText = color
}