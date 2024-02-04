let cars = ["Tesla","Porshe","Nissan","Mazda","Fiat","Mersedes"];

let new_cars = cars.slice(1,4);
console.log(new_cars);

let full_cars = cars.slice();
console.log(full_cars);


/* ----------------------- */

cars.forEach(function(item, index, array) {
	console.log(index + " - " + item + " + " + array);
});


console.log(cars.indexOf("Nissan",0));
console.log(cars.indexOf("Nissan",4));

console.log(cars.includes("Nissan",0));
console.log(cars.includes("Nissan",4));

console.log(cars.lastIndexOf("Nissan",4));
console.log(cars.lastIndexOf("Nissan",1));


let users = [
	{id: 1,	name: "Onton", salary: 700},
	{id: 2,	name: "Kirill", salary: 1200},
	{id: 3,	name: "Dima", salary: 900},
	{id: 4,	name: "Anna", salary: 1100},
	{id: 5,	name: "Oleg", salary: 500},
]

console.log(users);

let user = users.find(item => item.id === 3);
console.log(user);

let userIndex = users.findIndex(item => item.id === 1);
console.log(userIndex);


let result = users.filter(item => (item.salary > 1000 && item.salary == 1100));
let result2 = users.filter(item => item.salary > 1000);
console.log(result);

/* map */

let discount = 100;

users.map(item => new_user(item.id,item.name,(item.salary -= discount)));
function new_user(id,name,salary) {
	let user = {
		id: id, name: name, salary: salary,
	}
	return user;
}

console.log(users);

let sort_users = users.sort((a,b) => a.salary-b.salary);
let sort_users2 = users.sort((a,b) => b.salary-a.salary);
console.log(sort_users);
console.log(sort_users2);
