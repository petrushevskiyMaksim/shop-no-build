import { ItemsModel } from '../model/items_model';
import { BagModel } from '../model/bag_model';
import { OrdersModel } from '../model/orders_model';
import { UserModel } from '../model/user_model';
import { ItemsView } from '../view/items_view';
import { BagPreviewView } from '../view/bag-preview.view';
import { OrdersPreviewView } from '../view/orders-preview.view';
import { LocalStorage } from '../local-storage/local-storage';
import { Storage } from '../firebase/firebase';

export class ItemsController {
	constructor() {
		this.itemsModel = new ItemsModel();
		this.bagModel = new BagModel();
		this.ordersModel = new OrdersModel();
		this.userModel = new UserModel();

		this.itemsView = new ItemsView({
			onRenderInBag: this.handleClickItemBtn,
		});
		this.bagPreviewView = new BagPreviewView();
		this.ordersPreviewView = new OrdersPreviewView();

		this.storage = new Storage();

		this.localStorage = new LocalStorage();
	}

	init() {
		this.storage.pull().then(items => {
			if (!items || !items.length) {
				return;
			}

			this.itemsModel.set(items);
			this.itemsView.renderListItems(items);

			items.forEach(item => {
				const basket = this.localStorage.get();

				basket.forEach(itemBasket => {
					if (item.id === itemBasket) {
						this.bagPreviewView.createBagItem(item);
					}
				});
			});
		});
	}

	handleClickItemBtn = (id, btn) => {
		this.itemsModel.getItems().forEach(item => {
			if (id !== item.id) {
				return;
			}

			const basket = this.localStorage.get();
			console.log(basket);

			if (basket.includes(id)) return;

			this.bagModel.set(item);
			
			basket.push(id);
			this.localStorage.set(basket);

			btn.style.cssText = 'background-color: #47b647;';

			this.bagPreviewView.createBagItem(item);
		});
	};
}
