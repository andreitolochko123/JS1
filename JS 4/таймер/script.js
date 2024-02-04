/*
1) при нажатии кнопки установить время,
количество секунд улетает в h2
2) реализовать кнопку старт
3) реализовать кнопку стоп
4) форматированный вывод таймера д:ч:м:с
ДЗ:
5) сделать так, чтобы при нажатии старт
таймер не запускался заново 
(не шел быстрее)
6) при достижении 0 секунд, таймер останавливается 
(вывод сообщения времы вышло - можно через alert)
7) сделать 3 кнопки на 5,10,15 минут - можно делать через onclick
8*) сделать звук по завершению таймера (будильник) - тег audio JS
*/
setTime.addEventListener("click",setNewTime);
startTimer.addEventListener("click",checkStartTimer);
stopTimer.addEventListener("click",timerStop);
let x = 0;
let timeout;
let check = 0;

function checkStartTimer() {
	if (check===0) {
		timerGo();
		check = 1;
	}
}

function fixedTime(sec) {
	x = sec;
	checkStartTimer();
}

function timerStop(){
	check = 0;
	clearTimeout(timeout);
	myAudio.pause();
}

function setNewTime() {
	x = +number.value;
	formatTime(x);
}

function timerGo(){
	x--;
	formatTime(x);
	timeout = setTimeout(timerGo,1000);
	if (x===0) {
		timerStop();
		myAudio.play();
	}
} 

function formatTime(x){
	let sec = x%60; 
	let day = (x-(x%86400))/86400;
	let hourLeft = x-(day*86400)-sec;
	let hour = (hourLeft-(hourLeft%3600))/3600;
	let min = (x-(day*86400)-(hour*3600)-sec)/60;

	if (sec<10) sec = "0"+sec;
	if (hour<10) hour = "0"+hour;
	if (min<10) min = "0"+min;

	time.innerHTML = `${day}:${hour}:${min}:${sec}`;
}

console.log(myAudio);
