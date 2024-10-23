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

const addAmmount = () => {
	ammount++;
	console.log(ammount);
};

const removeAmmount = () => {
	ammount--;
	console.log(ammount);
};

function renderBasket() {
	let basketRef = document.getElementById("basket");
	for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
		const basketItems = basket[basketIndex];
		const price = basketItems.price.toString().replace(".", ",");
		basketRef.innerHTML += basketTemplate(basketItems.name, price, ammount);
	}
}
