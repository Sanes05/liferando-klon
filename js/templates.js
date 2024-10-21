const basketTemplate = () => {
	return `
        <div class="basket-headline-div">
            <h2 class="basket-headline">Warenkorb</h2>
        </div>
    `;
};

const dishTemplate = (name, price, description) => {
	return `
    <div class="dish">
	    <div class="inner-dish">
		    <h3>${name}</h3>
		    <p>${description}</p>
		    <p>${price}€</p>
	    </div>
    </div>
    `;
};
