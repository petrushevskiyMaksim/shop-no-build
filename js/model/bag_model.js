export class BagModel {
	constructor() {
		this.itemsBag = [];
	}

	set(item) {
		this.itemsBag.push(item.id);
		console.log(this.itemsBag);
	}

	get() {
		console.log(this.itemsBag);
		return this.itemsBag;
	}
}
