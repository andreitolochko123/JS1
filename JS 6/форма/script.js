login.addEventListener("input",checkLogin);
pass.addEventListener("input",checkPass);
conpass.addEventListener("input",checkPass);

function checkLogin() {
	if (login.value.length<5) {
		login.classList.add("red");
		login.classList.remove("green");
	}else{
		login.classList.add("green");
		login.classList.remove("red");
	}
}

function checkPass(){
	if (pass.value.length>5 && conpass.value.length>5) {
		if (pass.value === conpass.value) {
			pass.classList.add("green");
			pass.classList.remove("red");
			conpass.classList.add("green");
			conpass.classList.remove("red");
		}else{
			pass.classList.add("red");
			pass.classList.remove("green");
			conpass.classList.add("red");
			conpass.classList.remove("green");
		}
	}else{
		pass.classList.add("red");
		pass.classList.remove("green");
		conpass.classList.add("red");
		conpass.classList.remove("green");
	}
}

/*
1) логин при вводе <5 символов - подсвечивается красным
2) логин при вводе >5 символов - подсвечивается зеленым
3) пароль и подтверждение пароля - совпадают
4) пароль и подтверждение пароля > 5 символов
*/

/*
ДЗ
1) тестовое оповещение ошибок
2) при вводе пароля - подтверждение НЕ ДОЛЖНО выдавать ошибку
3) при вводе подтверждения пароля, если пароль проходит все проверки, он так же не должен быть красным
4) добавить поле ввода для почты, с проверками на длинну 
5) (доп) упростить код, без дублирований classList add remove
6) добавить все проверки на кнопку "регистрация" +-

*/