function onload() {
	renderBasket();
}

function renderBasket() {
	let basket = document.getElementById("basket");
	basket.innerHTML = basketTemplate();
}
