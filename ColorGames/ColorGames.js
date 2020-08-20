

var numOfColors = 6;
var colors = generateColor(numOfColors);
var h1 = document.querySelector("h1");
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorRGB = document.querySelector("#ColorRGB");
var showHint = document.querySelector("#showHint");
var resetbutton = document.querySelector(".reset");
var easybutton = document.querySelector("#easybutton");
var hardbutton = document.querySelector("#hardbutton");


// Game reset or initialization
easybutton.classList.remove("selected");
hardbutton.classList.add("selected");
reSetAll(numOfColors);
resetbutton.addEventListener("click", function() {
	reSetAll(numOfColors);
})

gameOperations();

easybutton.addEventListener("click", function() {
	easybutton.classList.add("selected");
	hardbutton.classList.remove("selected");
	numOfColors = 3;
	reSetAll(numOfColors);
	for (var i = 3; i <= 5; i++) {
		squares[i].style.display = "none";
	}
});

hardbutton.addEventListener("click", function() {
	hardbutton.classList.add("selected");
	easybutton.classList.remove("selected");
	numOfColors = 6;
	reSetAll(numOfColors);
	for (var i = 3; i <= 5; i++) {
		squares[i].style.display = "block";
	}
});

// All the helper funcitons
function changeAllColors(target) {
	for (var i = 0; i < numOfColors; i++) {
		squares[i].style.background = target;
	}
}

function pickColor(){
	var picknum = Math.floor(Math.random() * colors.length);
	return colors[picknum];
}

function generateColor(numOfColors) {
	var array = [];
	for (var i = 0; i < numOfColors; i++) {
		var ranr = Math.floor(Math.random() * 256);
		var rang = Math.floor(Math.random() * 256);
		var ranb = Math.floor(Math.random() * 256);
		if (ranr <= 30 && rang <= 30 && ranb <= 30) continue;
		array[i] = "rgb(" + ranr + ", " + rang + ", " + ranb + ")";
	}
	return array;
}

function reSetAll(numOfColors) {
	colors = generateColor(numOfColors);
	pickedColor = pickColor();
	colorRGB.textContent = pickedColor.substring(3);
	for (var i = 0; i < numOfColors; i++) {
		squares[i].style.background = colors[i]; 
	}
	h1.style.background = "rgb(0, 100, 200)";
	showHint.textContent = "";
	resetbutton.textContent = "New Game";
}

function gameOperations() {
	for (var i = 0; i < numOfColors; i++) {
		squares[i].addEventListener("click", function(){
			if (this.style.background === pickedColor) {
				h1.style.background = pickedColor;
				changeAllColors(pickedColor);
				showHint.textContent = "Good Job!!";
				showHint.style.color = "white";
				showHint.style.background = pickedColor;
				resetbutton.textContent = "Play Again?";
			} else {
				this.style.background = "rgb(30, 30, 30)";
				showHint.textContent = "Try Again!"
				showHint.style.color = "black";
				showHint.style.background = "white";
			}
		});
	}
}


