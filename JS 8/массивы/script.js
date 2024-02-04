let str = "";

draw();
function draw(){
	str = "";
	for(let car of cars){
		str += `
			<div class="item">
				<img src="car.jpg" class="img">
				<h2>${car.name}</h2>
				<p>${car.description}</p>
				<p class="price">${car.price}$</p>
			</div>
		`;
	}
	items.innerHTML = str;
}
