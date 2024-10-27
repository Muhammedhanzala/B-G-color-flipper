let colorsArray = ["#DC143C", "#800080", "#7FFF00", "#00FFFF", "#FFA500", "#FF00FF"];
let currentColorIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colorsArray[currentColorIndex];
    document.getElementById("display").innerText = `B-G Color: ${colorsArray[currentColorIndex]}`;
    currentColorIndex = (currentColorIndex + 1) % colorsArray.length;
}
