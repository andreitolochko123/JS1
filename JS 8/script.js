/*button.addEventListener("click", sayHello);

function sayHello() {
	alert("Hello!");
}*/

/*button.addEventListener("click", function() {
	alert("Hello!");
});*/

// button.onclick = function(){
// 	alert("Hello!");
// }

//button.onclick = () => alert("Hello!");


table.onclick = function(event){
	let target = event.target;
	if (target.tagName != "TD") return;
	let color = target.getAttribute("color");
	if (color === null){
		target.style.background = "red";
	}else{
		target.style.background = color;
	}
}


let cars = ["Tesla","Porshe","Nissan","Mazda"];
console.log(cars);

console.log(cars.length);

cars[4] = "Mersedes";
cars[cars.length] = "Fiat";
console.log(cars);

let arr = [
	"Onton",
	true,
	{name: "Onton", age: 33},
	function(){ alert("Hello!")},
];
console.log(arr);
console.log(arr[2].age);
//arr[3]();

/* Методы массивов */
/*рор - удаляет последний элемент массива и выводит его*/
console.log(cars.pop());
console.log(cars);

/* push - добавляет элемент в конец массива */
cars.push("BMW");
console.log(cars);

/* shift() / unshift  - удаляет/добавляет элементы в начале массива */

console.log(cars.shift());
console.log(cars);
cars.unshift("Audi");
console.log(cars);


for(let i = 0; i<cars.length; i++){
	console.log(i + " - " + cars[i]);
}

/* элементы */
for(let car of cars){
	console.log(car);
}

/* индексы */
for(let key in cars){
	console.log(key + " - " + cars[key]);
}

/*cars[100] = "Ford";*/
//delete(cars[1]);

console.log(cars);
cars.splice(2,1); //1 атрибут - с какого элемента удаляем, 
//2 атрибут - сколько элементов удаляем
console.log(cars);

