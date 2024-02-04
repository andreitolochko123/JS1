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
startTimer.addEventListener("click",timerGo);	
stopTimer.addEventListener("click",timerStop); 	
function setNewTime() {
let x = 0;
let timeout;

	x = +number.value; 
	formatTime(x); 
}

function timerGo(){
	x--;
	formatTime(x);
	timeout = setTimeout(timerGo,1000);
} 

function timerStop(){    



	clearTimeout(timeout);
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