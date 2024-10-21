function onload() {
	loadBasket();
}

function loadBasket() {
	let basket = document.getElementById("basket");
	basket.innerHTML = basketTemplate();
}
