import { ItemModel } from '../model/item_model';
import { BagModel } from '../model/bag_model';
import { ItemView } from '../view/item_view';
import { BagPreviewView } from '../view/bag-preview.view';
import { Storage } from '../storage/storage';
import { LocalStorage } from '../localStorage/localStorage';

export class ItemController {
	constructor() {
		this.itemModel = new ItemModel();
		this.bagModel = new BagModel();
		this.itemView = new ItemView({
			onChangeBag: this.handleChangeBag,
		});
		this.bagPreviewView = new BagPreviewView();
		this.storage = new Storage();
		this.localStorage = new LocalStorage();
	}

	getIdFromURL = id => {
		const params = new URLSearchParams(location.search);

		return (id = params.get('id'));
	};

	init = () => {
		this.storage.pull().then(items => {
			const productId = this.getIdFromURL('id');
			const findProdact = items.find(item => item.id === productId);

			console.log(findProdact);

			this.itemView.createCardProduct(findProdact);
		});
	};

	handleChangeBag = item => {};
}
