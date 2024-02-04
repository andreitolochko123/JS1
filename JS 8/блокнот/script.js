addItem.addEventListener("click",addNote);
editItem.addEventListener("click",editNote);
let str = "";
let maxKey = 0;

function editNote() {
	editItem.hidden = true;
	localStorage.setItem(maxKey,note.value);
	draw();
	note.value = "";
}

function setItem(key) {
	editItem.hidden = false;
	maxKey = key;
	let item = localStorage.getItem(key);
	note.value = item;
}


function getMaxKey() {
	for(let i = 0; i<localStorage.length; i++){
		let key = +localStorage.key(i);
		if (maxKey<key) maxKey = key;
	}
	maxKey++;
}

function addNote() {
	getMaxKey();
	localStorage.setItem(maxKey,note.value);
	draw();
	note.value = "";
}

draw();
function draw() {
	str = "";
	for(let i = 0; i<localStorage.length; i++){
		let key = localStorage.key(i);
		let item = localStorage.getItem(key);
		str += `
			<tr>
				<td>${key}</td>
				<td>${item}</td>
				<td>
					<button key="${key}" action="delete">Удалить</button>
					<button key="${key}" action="edit">Редактировать</button>
				</td>
			</tr>
		`
	}
	table.innerHTML = str;
}

table.onclick = function(event) {
	let target = event.target;
	if (target.tagName != "BUTTON") return;
	let key = +target.getAttribute("key");
	let action = target.getAttribute("action");

	if (action=="delete") delItem(key);
	if (action=="edit") setItem(key);

}

function delItem(key) {
	localStorage.removeItem(key);
	draw();
}



/*
1) сделать добавление записей (МНОГО!) без указания key
2) сделать кнопку с удалением записей (через onclick)
3*) сделать редактирование записи (через onclick)
*/