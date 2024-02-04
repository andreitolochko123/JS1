let str = "";

set_n.onclick = function(){
	str = "";
	let n = num.value;
	for(let i = 1; i<=n; i++){
		str += "<tr>";
		for (let j = 1; j<=n; j++){
			str += `<td i="${i}" j="${j}" class="yellow"> ${i} ${j} </td>`;
		}
		str += "</tr>";
	}
	table.innerHTML = str;
}

table.onclick = function(event) {
	let target = event.target;
	if (target.tagName != "TD") return;
	let i = +target.getAttribute("i");
	let j = +target.getAttribute("j");

	changeColor(i,j);
	changeColor(i,j-1);
	changeColor(i,j+1);
	changeColor(i-1,j);
	changeColor(i+1,j);
	win();
}

function win() {
	let td_col = document.getElementsByTagName("td");
	for(let x = 0; x<td_col.length; x++){
		if (td_col[x].className === "yellow") {
			return;
		}
	}
	win_status.innerHTML = "Победа!";	
}

function changeColor(i,j){
	let td_col = document.getElementsByTagName("td");
	for(let x = 0; x<td_col.length; x++){

		let xi = +td_col[x].getAttribute("i");
		let xj = +td_col[x].getAttribute("j");

		if (i === xi && j === xj) {
			if (td_col[x].className === "red"){
				td_col[x].className = "yellow";
			}else{
				td_col[x].className = "red";
			}
		}
	}
}

