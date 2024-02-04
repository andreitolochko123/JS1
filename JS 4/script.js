document.addEventListener("keydown",keyDownFunc);
let pt = 0;
let pl = 0;
let et = 150;
let el = 150;
e1.style.top = 150 + "px";
e1.style.left = 150 + "px";

function move(ptChange,plChange) {
	pt += ptChange;
	pl += plChange;

	if (pt>350) pt = 350;
	if (pt<0) pt = 0;
	if (pl>650) pl = 650;
	if (pl<0) pl = 0;

	player.style.top = pt + "px";
	player.style.left = pl + "px";

	let dist = Math.round(distance(pt,pl,et,el));
	if (dist<50) alert("Попался!");
}

function distance(pt,pl,et,el) {
	let dist = Math.sqrt((pt-et)*(pt-et)+(pl-el)*(pl-el));
	return dist;
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

console.log(randomInteger(-10, 10));

/*
1) сделать взаимодействие с target - вывести alert "Победа"
2) сделать движение (случайное) проитвника
3) сделать случайное появление противника (от стартовой точки игрока отступ минимум 100px)
4) добавить еще 2х противников

*/