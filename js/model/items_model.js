export class ItemsModel {
	constructor() {
		this.items = [];
	}

	set(items) {
		items.forEach(item => {
			this.items.push(item);
		});
	}

	getItems() {
		return this.items;
	}
}
