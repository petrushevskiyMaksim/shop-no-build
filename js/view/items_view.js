export class ItemsView {
	constructor({ onRenderInBag }) {
		this.itemsListNode = document.getElementById('shopListItems');

		this.onRenderInBag = onRenderInBag;
	}

	getListNode() {
		return this.itemsListNode;
	}

	renderListItems(items) {
		items.forEach(item => {
			this.createItem(item);
		});
	}

	createItem(item) {
		const li = document.createElement('li');
		li.id = item.id;
		li.classList.add('shop__item');
		li.classList.add('item-shop');

		const divImgWrap = document.createElement('div');
		divImgWrap.classList.add('item-shop__img-wrapper');

		const linkImg = document.createElement('a');
		linkImg.classList.add('item-shop__link');
		linkImg.href = `./pages/card.html?id=${item.id}`;

		const imgItem = document.createElement('img');
		imgItem.classList.add('item-shop__image');
		imgItem.src = item.imageURL;
		imgItem.alt = `фото ${item.model}`;

		const divDescItem = document.createElement('div');
		divDescItem.classList.add('item-shop__discription-item');

		const linkTitle = document.createElement('a');
		linkTitle.classList.add('item-shop__link-title');
		linkTitle.href = `./pages/card.html?id=${item.id}`;

		const titleItem = document.createElement('h2');
		titleItem.classList.add('item-shop__title');
		titleItem.innerText = item.model;

		const descSmall = document.createElement('h3');
		descSmall.classList.add('item-shop__small-description');
		descSmall.innerText = item.series;

		const divAction = document.createElement('div');
		divAction.classList.add('item-shop__action');

		const price = document.createElement('span');
		price.classList.add('item-shop__price');
		price.innerText = `$ ${item.price}`;

		const divBtnWrap = document.createElement('div');
		divBtnWrap.classList.add('item-shop__btn-wrapper');

		const buttonForBag = document.createElement('button');
		buttonForBag.classList.add('item-shop__button');

		buttonForBag.onclick = () => {
			this.onRenderInBag(item.id, buttonForBag);
			// buttonForBag.style.cssText = 'background-color: #47b647;';
			// buttonForBag.setAttribute('disabled', true);
		};

		const bagIcon = document.createElement('img');
		bagIcon.classList.add('item-shop__img');
		bagIcon.src = './images/icons/bag-img.svg';
		bagIcon.alt = 'картинка корзины';

		linkImg.append(imgItem);
		divImgWrap.append(linkImg);

		linkTitle.append(titleItem);
		divDescItem.append(linkTitle, descSmall);

		buttonForBag.append(bagIcon);
		divBtnWrap.append(buttonForBag);
		divAction.append(price, divBtnWrap);

		li.append(divImgWrap, divDescItem, divAction);

		this.itemsListNode.append(li);
	}
}
