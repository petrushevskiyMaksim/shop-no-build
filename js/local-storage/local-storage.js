export class LocalStorage {
	constructor() {}

	set(basket) {
		localStorage.setItem('items', JSON.stringify(basket));
	}

	get() {
		const itemsIds = localStorage.getItem('items');
		return itemsIds ? JSON.parse(itemsIds) : [];
	}
}
