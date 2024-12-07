const basketTemplate = (name, price, basketIndex) => {
	return `
<div class="basket-main-div" id="basket-items">
	<div class="basket-item-div">
		<p class="basket-item-name">${name}</p>
		<p class="basket-item-price orange">${price}€</p>
	</div>
	<div class="ammount-btn-div">
		<button onclick="editAmmount('remove', ${basketIndex})">
			<img src="./assets/icon/remove.svg" alt="remove" />
		</button>
		<button onclick="editAmmount('add', ${basketIndex})">
			<img src="./assets/icon/plus.svg" alt="add" />
		</button>
	</div>
	<div class="basket-amout-div">
		<p class="basket-item-ammount" id="ammount-id${basketIndex}"></p>
	</div>
</div>
    `;
};

const dishTemplate = (name, price, description) => {
	return `
    <div class="dish">
	<div class="inner-dish">
		<h3>${name}</h3>
		<p>${description}</p>
		<p class="orange">${price}€</p>
	</div>
	<div class="add-btn-div">
		<button class="add-btn" onclick="addToBasket({ name: '${name}', price: ${price.replace(",", ".")}, description: '${description}' })">
			<img class="btn-img" src="./assets/icon/plus.svg" alt="plus" />
		</button>
	</div>
</div>
    `;
};
