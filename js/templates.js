const basketTemplate = (name, price, ammount) => {
	return `
<div class="basket-main-div" id="basket-items">
	<div class="basket-item-div">
		<p class="basket-item-name">${name}</p>
		<p class="basket-item-price orange">${price}€</p>
	</div>
	<div class="ammount-btn-div">
		<button onclick="removeAmmount()"><img src="./assets/icon/remove.svg" alt="" /></button>
		<button onclick="addAmmount()"><img src="./assets/icon/plus.svg" alt="" /></button>
	</div>
	<div class="basket-amout-div">
		<p class="basket-item-ammount">${ammount}</p>
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
		<button class="add-btn">
			<img class="btn-img" src="./assets/icon/plus.svg" alt="plus" />
		</button>
	</div>
</div>

    `;
};
