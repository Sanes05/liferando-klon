function onload() {
	renderBasket();
	renderDishes();
	calculateFullPrice();
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
	checkWidth();
	calculateFullPrice();
}

const checkWidth = () => {
	if (window.innerWidth < 1050) {
		renderResBasket();
	} else {
		renderBasket();
	}
};

function removeFromBasket(basketIndex) {
	basket.splice(basketIndex, 1);
	checkWidth();
	calculateFullPrice();
}

function calculateFullPrice() {
	let price = 0;
	let deleveryCosts = 3.5;
	basket.forEach((item) => {
		price += item.price * item.ammount;
	});
	let fullPrice = price + deleveryCosts;
	document.getElementById("deliveryCosts").innerHTML = deleveryCosts.toFixed(2).replace(".", ",") + "€";
	document.getElementById("price").innerHTML = price.toFixed(2).replace(".", ",");
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

function openBasket() {
	let overlay = document.getElementById("overlay");
	let basket = document.getElementById("basket");
	let priceRef = document.getElementById("prices");
	basket.innerHTML = "";
	priceRef.innerHTML = "";
	overlay.innerHTML = resBasketTemplate();
	renderResBasket();
	calculateFullPrice();
	overlay.classList.toggle("overlay");
}

function closeBasket() {
	let overlay = document.getElementById("overlay");
	let priceRef = document.getElementById("prices");
	overlay.classList.toggle("overlay");
	priceRef.innerHTML = priceTemplate();
}

function renderResBasket() {
	let basketRef = document.getElementById("resBasket");
	basketRef.innerHTML = "";
	for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
		const basketItems = basket[basketIndex];
		const price = basketItems.price.toString().replace(".", ",");
		basketRef.innerHTML += basketTemplate(basketItems.name, price, basketIndex);
		document.getElementById(`ammount-id${basketIndex}`).innerHTML = basketItems.ammount;
	}
}

const orderFun = () => {
	if (basket.length === 0) {
		alert("Dein Warenkorb ist leer");
	} else {
		alert("Deine Bestellung wurde Abgeschlossen");
		location.reload();
	}
};
