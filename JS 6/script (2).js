animal.setAttribute("animal","slon");

console.log(animal.hasAttribute("animal")); //true
console.log(animal.hasAttribute("begemot")); //false

console.log(animal.getAttribute("animal")); //slon
console.log(animal.getAttribute("animal1")); //null

animal.removeAttribute("animal");

console.log(animal.className);
animal.className = "kot sobaka";

console.log(animal.classList);

animal.classList.add("zajac");
animal.classList.remove("sobaka");
animal.classList.toggle("sinitsa");
animal.classList.toggle("kot");

console.log(a.href);
console.log(animal.href);
console.log(animal.src);
console.log(img.src);
console.log(img.getAttribute("src"));
console.log(img.href);
// console.log(img.id);

console.log(input.getAttribute("value"));
input.value = "someone else";
console.log(input.getAttribute("value"));
console.log(input.value);

// console.log(input.value);
// console.log(input.getAttribute("value"));
// input.value = "someone else";
// console.log(input.value);

//check.checked = true;
check.setAttribute("checked","");
check.checked = false;

myCheckDiv.addEventListener("click",checkFunc);

function checkFunc() {
	if (myCheckbox.checked) {
		myCheckbox.checked = false;
		myCheckDiv.innerHTML = "";
	}else{
		myCheckbox.checked = true;
		myCheckDiv.innerHTML = "V";
	}
}

myCheckDiv2.addEventListener("click",checkFunc2);

function checkFunc2() {
	if (myCheckbox.checked) {
		myCheckbox.checked = false;
		indicator.classList.remove("on");
	}else{
		myCheckbox.checked = true;
		indicator.classList.add("on");
	}
}