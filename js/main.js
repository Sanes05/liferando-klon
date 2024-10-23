function onload() {
	renderBasket();
	renderDishes();
}

let basket = [
	{
		name: "Classic Cheese Burger",
		price: 9.65,
	},
	{
		name: "Hamburger",
		price: 8.65,
	},
];

function renderDishes() {
	let dishes = [document.getElementById("burger"), document.getElementById("burger-menu"), document.getElementById("hot-dog")];
	dishes.forEach((dishElement, index) => {
		myDishes[index].forEach((dish) => {
			const price = dish.price.toString().replace(".", ",");
			dishElement.innerHTML += dishTemplate(dish.name, price, dish.description);
		});
	});
}

function addToBasket() {}

let ammount = 0;

function editAmmount(id) {
	let ammountRef = document.getElementById("ammount-id");
	if (id === "add") {
		ammount++;
		ammountRef.innerHTML = ammount;
	} else if (id === "remove") {
		if (ammount < 1) {
			console.error("Wert ist kleiner als 1");
			removeFromBasket();
			return false;
		}
		ammount--;
		ammountRef.innerHTML = ammount;
	}
}

function removeFromBasket() {}

function calculateFullPrice() {
	let fullPriceRef = document.getElementById("ammount-id");
	let fullPrice = price * ammount;
	fullPriceRef.innerHTML = fullPrice;
}

function renderBasket() {
	let basketRef = document.getElementById("basket");
	for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
		const basketItems = basket[basketIndex];
		const price = basketItems.price.toString().replace(".", ",");
		basketRef.innerHTML += basketTemplate(basketItems.name, price);
	}
}
