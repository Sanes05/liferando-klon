function onload() {
	renderBasket();
	renderDishes();
}

function renderBasket() {
	let basket = document.getElementById("basket");
	basket.innerHTML = basketTemplate();
}

function renderDishes() {
	let dishes = [document.getElementById("burger"), document.getElementById("burger-menu"), document.getElementById("hot-dog")];
	myDishes[0].forEach((dish) => {
		dishes[0].innerHTML += dishTemplate(dish.name, dish.price, dish.description);
	});
	myDishes[1].forEach((dish) => {
		dishes[1].innerHTML += dishTemplate(dish.name, dish.price, dish.description);
	});
	myDishes[2].forEach((dish) => {
		dishes[2].innerHTML += dishTemplate(dish.name, dish.price, dish.description);
	});
}
