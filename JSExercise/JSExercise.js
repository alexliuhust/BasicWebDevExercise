var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var rs = document.querySelector("#rs");

var p1score = 0;
var p2score = 0;

var p1s = document.querySelector("#p1s");
var p2s = document.querySelector("#p2s");

var gameover = false;
var winpoint = 5;
var theTop = document.querySelector("#theTop");

var numinput = document.querySelector("input[type='number']");

p1.addEventListener("click", function(){
	if (!gameover) {
		p1score++;
		if (p1score >= winpoint) {
			gameover = true;
			p1s.classList.add("win");
		}
		p1s.textContent = p1score;
	}
});

p2.addEventListener("click", function(){
	if (!gameover) {
		p2score++;
		if (p2score >= winpoint) {
			gameover = true;
			p2s.classList.add("win");
		}
		p2s.textContent = p2score;
	}
});

rs.addEventListener("click", function(){
	reSet();
});

numinput.addEventListener("change", function(){
	var value = parseInt(this.value, 10);
	if (value <= 0) {
		winvaluepoint = 1;
		theTop.textContent = 1;
	} else if (value >= 10) {
		winpoint = 10;
		theTop.textContent = 10;
	} else
	winpoint = value;
	theTop.textContent = this.value;
	reSet();
});

function reSet() {
	p1score = 0;
	p2score = 0;
	p1s.textContent = p1score;
	p2s.textContent = p2score;
	gameover = false;
	p1s.classList.remove("win");
	p2s.classList.remove("win");
}






