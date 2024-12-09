const basketTemplate = (name, price, basketIndex) => {
	return `
<div class="basket-main-div" id="basket-items">
	<div class="basket-item-div">
		<p class="basket-item-name">${name}</p>
		<p class="basket-item-price orange">${price}€</p>
	</div>
	<div class="ammount-div">
		<button class="ammount-btn" onclick="editAmmount('remove', ${basketIndex})">
			<img src="./assets/icon/remove.svg" alt="remove" />
		</button>
			<div class="basket-amout-div">
		<p class="basket-item-ammount" id="ammount-id${basketIndex}"></p>
			</div>
		<button class="ammount-btn" onclick="editAmmount('add', ${basketIndex})">
			<img src="./assets/icon/plus.svg" alt="add" />
		</button>
	</div>
</div>
    `;
};

const dishTemplate = (name, price, description) => {
	return `
    <div class="dish"">
	<div class="inner-dish">
		<h3>${name}</h3>
		<p>${description}</p>
		<p class="orange">${price}€</p>
	</div>
	<div class="add-btn-div">
		<button class="add-btn" onclick="addToBasket({ name: '${name}', price: ${price.replace(",", ".")} })">
			<img class="btn-img" src="./assets/icon/plus.svg" alt="plus" />
		</button>
	</div>
</div>
    `;
};

const resBasketTemplate = () => {
	return `
	<div class="overlay-background" onclick="closeBasket()"></div>
			<div class="overlay-content" id="overlay-content">
			<h1 class="headline-basket">Warenkorb</h1>
			<button class="order-btn-main" onclick="closeBasket()">Warenkorb Schließen</button>
			<div id="resBasket"></div>
			${priceTemplate()}
			<button class="order-btn-main" onclick="orderFun()">Bestellen</button>
			</div>
				`;
};

const priceTemplate = () => {
	return `		
		<div class="prices">
					<div class="prices-main">
						<p class="price">Zwichenkosten:</p>
						<div id="price"></div>
					</div>
					<div class="prices-main">
						<p class="deliverycosts">Lieferkosten:</p>
						<div id="deliveryCosts"></div>
					</div>
					<div class="prices-main">
						<p class="full-price">Gesamt:</p>
						<div id="full-price"></div>
					</div>
		</div>`;
};
