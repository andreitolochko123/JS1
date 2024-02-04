let str = "";

add_car.onclick = function(){
	let car = {
		name: name_car.value,
		description: desc.value,
		price: price.value,
	}
	cars.push(car);
	draw();
}

more_price.onclick = function(){
	let result = cars.filter(item => item.price > price.value);
	draw(result);
}

less_price.onclick = function(){
	let result = cars.filter(item => item.price < price.value);
	draw(result);
}

vozr.onclick = function(){
	let new_cars = cars.slice();
	let result = new_cars.sort((a,b) => a.price-b.price);
	draw(result);
}

ubiv.onclick = function(){
	let new_cars = cars.slice();
	let result = new_cars.sort((a,b) => b.price-a.price);
	draw(result);
}


function draw(array){
	if (array===undefined) array = cars; 
	str = "";
	for(let key in array){
		str += `
<div class="item">
	<button class="close" delete="${key}">X</button>
	<img src="car.jpg" class="img">
	<h2>${array[key].name}</h2>
	<p>${array[key].description}</p>
	<p class="price">${array[key].price}$</p>
</div>
		`;
	}
	items.innerHTML = str;
}
draw();

items.onclick = function(event) {
	let target = event.target;
	if (target.tagName != "BUTTON") return;
	if (!target.hasAttribute("delete")) return;

	let key = +target.getAttribute("delete");
	cars.splice(key,1);
	draw();
}