function onload() {
	renderBasket();
	renderDishes();
}

let basket = [];
let ammount = 0;

function renderDishes() {
	let dishes = [document.getElementById("burger"), document.getElementById("burger-menu"), document.getElementById("hot-dog")];
	dishes.forEach((dishElement, index) => {
		myDishes[index].forEach((dish) => {
			const price = dish.price.toString().replace(".", ",");
			dishElement.innerHTML += dishTemplate(dish.name, price, dish.description);
		});
	});
}

function addToBasket(dish) {
	const existingDish = basket.find((item) => item.name === dish.name);
	if (existingDish) {
		existingDish.ammount++;
	} else {
		basket.push({...dish, ammount: 1});
	}
	renderBasket();
	calculateFullPrice();
}

function editAmmount(id, basketIndex) {
	let ammountRef = document.getElementById(`ammount-id${basketIndex}`);
	let item = basket[basketIndex];
	if (id === "add") {
		item.ammount++;
	} else if (id === "remove") {
		if (item.ammount <= 1) {
			removeFromBasket(basketIndex);
			return;
		}
		item.ammount--;
	}
	ammountRef.innerHTML = item.ammount;
	calculateFullPrice();
	renderBasket();
}

function removeFromBasket(basketIndex) {
	basket.splice(basketIndex, 1);
	renderBasket();
	calculateFullPrice();
}

function calculateFullPrice() {
	let fullPrice = 0;
	basket.forEach((item) => {
		fullPrice += item.price * item.ammount;
	});
	document.getElementById("full-price").innerHTML = fullPrice.toFixed(2).replace(".", ",") + "€";
}

function renderBasket() {
	let basketRef = document.getElementById("basket");
	basketRef.innerHTML = "";
	for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
		const basketItems = basket[basketIndex];
		const price = basketItems.price.toString().replace(".", ",");
		basketRef.innerHTML += basketTemplate(basketItems.name, price, basketIndex);
		document.getElementById(`ammount-id${basketIndex}`).innerHTML = basketItems.ammount;
	}
}
