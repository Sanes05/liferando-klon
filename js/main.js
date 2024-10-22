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
	dishes.forEach((dishElement, index) => {
		myDishes[index].forEach((dish) => {
			dishElement.innerHTML += dishTemplate(dish.name, dish.price, dish.description);
		});
	});
}
