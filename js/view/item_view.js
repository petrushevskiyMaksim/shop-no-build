export class ItemView {
	constructor({ onChangeBag }) {
		this.cardProductNode = document.getElementById('cardProduct');
		this.itemsBagListNode = document.getElementById('bagList');
		this.addInBagNode = document.getElementById('addInBag');

		this.onChangeBag = onChangeBag;
	}

	createCardProduct = item => {
		const divWrap = document.createElement('div');
		divWrap.classList.add('item__body');

		const divImgWrap = document.createElement('div');
		divImgWrap.classList.add('item__img-wrap');

		const imgItem = document.createElement('img');
		imgItem.classList.add('item__img');
		imgItem.src = item.imageURL;
		imgItem.alt = `Фото товара ${item.model}`;

		const divWrapDetalis = document.createElement('div');
		divWrapDetalis.classList.add('item__wrap-details');

		const h2 = document.createElement('h2');
		h2.classList.add('item__model');
		h2.innerText = item.model;

		const h3 = document.createElement('h3');
		h3.classList.add('item__series');
		h3.innerText = item.series;

		const divRaitingStar = document.createElement('div');
		divRaitingStar.classList.add('item__raiting-star');

		const listStars = document.createElement('ul');
		listStars.classList.add('raiting__list');

		const itemStar1 = document.createElement('li');
		itemStar1.classList.add('raiting__item');
		const itemStar2 = document.createElement('li');
		itemStar2.classList.add('raiting__item');
		const itemStar3 = document.createElement('li');
		itemStar3.classList.add('raiting__item');
		const itemStar4 = document.createElement('li');
		itemStar4.classList.add('raiting__item');
		const itemStarLast = document.createElement('li');
		itemStarLast.classList.add('raiting__item');

		const imgStar1 = document.createElement('img');
		imgStar1.classList.add('raiting__icon');
		imgStar1.src = './images/icons/raiting-full-star.png';
		imgStar1.alt = 'картинки звездочек отображающих рейтинг';
		const imgStar2 = document.createElement('img');
		imgStar2.classList.add('raiting__icon');
		imgStar2.src = './images/icons/raiting-full-star.png';
		imgStar2.alt = 'картинки звездочек отображающих рейтинг';
		const imgStar3 = document.createElement('img');
		imgStar3.classList.add('raiting__icon');
		imgStar3.src = './images/icons/raiting-full-star.png';
		imgStar3.alt = 'картинки звездочек отображающих рейтинг';
		const imgStar4 = document.createElement('img');
		imgStar4.classList.add('raiting__icon');
		imgStar4.src = './images/icons/raiting-full-star.png';
		imgStar4.alt = 'картинки звездочек отображающих рейтинг';

		const imgStarLast = document.createElement('img');
		imgStarLast.classList.add('raiting__icon');
		imgStarLast.src = './images/icons/Star-05.png';
		imgStarLast.alt = 'картинки звездочек отображающих рейтинг';

		const span = document.createElement('span');
		span.classList.add('item__raiting-number');
		span.innerText = `${item.rating} / 5`;

		const divPrice = document.createElement('div');
		divPrice.classList.add('item__price');
		divPrice.innerText = `$ ${item.price}`;

		const paragraph = document.createElement('p');
		paragraph.classList.add('item__small-description');
		paragraph.innerText = item.descShort;

		const divBagWrap = document.createElement('div');
		divBagWrap.classList.add('item__bag-wrap');

		const btnBag = document.createElement('button');
		btnBag.classList.add('item__btn-bag');
		btnBag.id = 'addInBag';
		btnBag.innerText = 'В корзину';

		btnBag.onclick = () => {
			this.onChangeBag(item);
		};

		const divDesc = document.createElement('div');
		divDesc.classList.add('item__description');

		const h3Desc = document.createElement('h3');
		h3Desc.classList.add('item__description-title');
		h3Desc.innerText = 'Описание';

		const paragraphDesc = document.createElement('p');
		paragraphDesc.classList.add('item__description-text');
		paragraphDesc.innerText = item.description;

		divBagWrap.append(btnBag);

		divImgWrap.append(imgItem);

		divWrapDetalis.append(
			h2,
			h3,
			divRaitingStar,
			divPrice,
			paragraph,
			divBagWrap
		);

		divRaitingStar.append(listStars, span);

		itemStar1.append(imgStar1);
		itemStar2.append(imgStar2);
		itemStar3.append(imgStar3);
		itemStar4.append(imgStar4);
		itemStarLast.append(imgStarLast);

		listStars.append(itemStar1, itemStar2, itemStar3, itemStar4, itemStarLast);

		divDesc.append(h3Desc, paragraphDesc);

		divWrap.append(divImgWrap, divWrapDetalis);

		this.cardProductNode.append(divWrap, divDesc);
	};
}
