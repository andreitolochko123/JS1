let div = document.createElement("div");
div.className = "container";
div.innerHTML = "qwer qwe qwe";

console.log(div);

let liLast = document.createElement("li");
liLast.innerHTML = "li Last";
ul.append(liLast);

let liFirst = document.createElement("li");
liFirst.innerHTML = "li first";
ul.prepend(liFirst);

ul.after("after");
ul.before("before");

// console.log(liLast);
