function getMaxId(){
	let maxId = 0;
	for(let key in cars){
		if (maxId<cars[key].id) maxId = +cars[key].id;
	}
	maxId++;
	return maxId;
}

add_car.onclick = function(){
	let car = {
		id: getMaxId(),
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
	items.innerHTML = "";
	for(let key in array){
		items.append(drawItem(array[key]));
	}
}
draw();

function drawItem(item){
	let div = document.createElement("div");
	div.className = "item";

	let button = document.createElement("button");
	button.className = "close";
	button.setAttribute("delete",item.id);
	button.innerHTML = "X";

	let img = document.createElement("img");
	img.className = "img";
	img.src = "car.jpg";

	let h2 = document.createElement("h2");
	h2.innerHTML = item.name;

	let p = document.createElement("p");
	p.innerHTML = item.description;

	let price = document.createElement("p");
	price.className = "price";
	price.innerHTML = item.price;

	div.append(button, img, h2, p, price);

	return div;
}

items.onclick = function(event) {
	let target = event.target;
	if (target.tagName != "BUTTON") return;
	if (!target.hasAttribute("delete")) return;

	let id = +target.getAttribute("delete");
	let key = cars.findIndex(item => item.id === id);
	cars.splice(key,1);
	draw();
}