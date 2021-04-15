//Declare variables to be used
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.getElementById("color-flip");
const color = document.querySelector(".color-desc");

//Add event listener to button
button.addEventListener("click", function () {
    const randomColor = getRandomColor();
    console.log(randomColor);

    //Make magic
    document.body.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];

});

//Create function to loop through array of colors
function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}
