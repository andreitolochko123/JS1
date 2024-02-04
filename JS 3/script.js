button.addEventListener("click",doRed);
start.addEventListener("click",timerX);

function doRed(){
	button.style.background = "red";
	clearTimeout(timeOut);
}

let timeOut;
let x = 0;

timerX();

function timerX(){
	x++;
	console.log(x);
	timeOut = setTimeout(timerX,1000);
}

//setInterval(timerX,1000);
