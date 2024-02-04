document.addEventListener("keydown",keyDownFunc);
let numEnemy = 1;
let timerId;

generateEnemy();
function generateEnemy(){
	let str = "";
	for(let i=1; i<=numEnemy; i++){
		str += `<div class="enemy" id="e${i}"></div>`;
	}
	enemys.innerHTML = str;
}

function newRoundLose(){
	numEnemy--;
	generateEnemy();
	randomEnemySpawn();
	lvl.innerHTML = numEnemy;
	player.style.top = 0 + "px";
	player.style.left = 0 + "px";
}

function newRoundWin(){
	numEnemy++;
	generateEnemy();
	randomEnemySpawn();
	lvl.innerHTML = numEnemy;
	player.style.top = 0 + "px";
	player.style.left = 0 + "px";
}

randomEnemySpawn();
function randomEnemySpawn(){
for(let i=1; i<=numEnemy; i++){
		let enemy = document.getElementById("e"+i);
		enemy.style.top = randomInteger(100, 350) + "px";
		enemy.style.left = randomInteger(100, 650) + "px";
	}	
	target.style.top = randomInteger(100, 350) + "px";
	target.style.left = randomInteger(100, 650) + "px";
}

function move(ptChange,plChange) {
	let pt = getTop(player);
	let pl = getLeft(player);

	pt += ptChange;
	pl += plChange;

	if (pt>350) pt = 350;
	if (pt<0) pt = 0;
	if (pl>650) pl = 650;
	if (pl<0) pl = 0;

	player.style.top = pt + "px";
	player.style.left = pl + "px";

	let dist = Math.round(distance(player,target));
	if (dist<50) newRoundWin();

	checkLose();
}

function checkLose(){
	for(let i=1; i<=numEnemy; i++){
		let enemy = document.getElementById("e"+i);
		let dist = Math.round(distance(player,enemy));
		if (dist<50) newRoundLose();
	}
}

function distance(id1,id2) {
	let pt = getTop(id1);
	let pl = getLeft(id1);
	let et = getTop(id2);
	let el = getLeft(id2);

	let dist = Math.sqrt((pt-et)*(pt-et)+(pl-el)*(pl-el));
	return dist;
}

function getTop(id) {
	let style = getComputedStyle(id); 
	let top = +(style.top.substring(0, style.top.length - 2));
	return top;
}

function getLeft(id) {
	let style = getComputedStyle(id); 
	let left = +(style.left.substring(0, style.left.length - 2));
	return left;
}


function moveEnemy(id) {
	let enemy = document.getElementById(id);

	let et = getTop(enemy);
	let el = getLeft(enemy);

	et += randomInteger(-10, 10);
	el += randomInteger(-10, 10);

	if (et>350) et = 350;
	if (et<0) et = 0;
	if (el>650) el = 650;
	if (el<0) el = 0;

	enemy.style.top = et + "px";
	enemy.style.left = el + "px";

	checkLose();
}

allEmenyMove();
function allEmenyMove(){
	for(let i=1; i<=numEnemy; i++){
		moveEnemy("e"+i);
	}

	let speed = 1000 - numEnemy*50;
	if (speed<100) speed = 100;

	timerId = setTimeout(allEmenyMove,speed);
	console.log("123");
}

function keyDownFunc(event) {
	let key = event.keyCode;
	switch (key) {
   		case 40: //вниз
   			move(10,0);
    	break;
    	case 38: //вверх
   			move(-10,0);
    	break;
    	case 39: //вправо
   			move(0,10);
    	break;
    	case 37: //влево
   			move(0,-10);
    	break;
    }
	//console.log(event.keyCode);
}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

/*
1) сделать взаимодействие с target - вывести alert "Победа"
2) сделать движение (случайное) проитвника
3) сделать случайное появление противника (от стартовой точки игрока отступ минимум 100px)
4) добавить еще 2х противников

*/

let style = getComputedStyle(e1); 
let Ptop = +(style.top.substring(0, style.top.length - 2));
