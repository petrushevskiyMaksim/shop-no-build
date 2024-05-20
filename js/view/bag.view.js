export class BagView {
	constructor() {
		this.listItemsBag = document.getElementById('bagList');
	}

	renderBagItem(item) {
		return (this.listItemsBag.innerHTML += `<li class='list-bag__item'>
				<div class='list-bag__item-wrap'>
					<div class='list-bag__img-wrap'>
						<img
							class='list-bag__img'
							src='${item.imageURL}'
							alt='${item.model}'
						/>
					</div>
					<div class='list-bag__item-body'>
						<h3 class='list-bag__title'>${item.model}</h3>
						<span class='list-bag__color'>${item.series}</span>
						<p class='list-bag__description'>
							${item.descShort}
						</p>
						<div class='list-bag__rating-wrap'>
							<ul class='list-bag__rating-list'>
								<li class='list-bag__rating-star'>
									<img
										src='./images/icons/raiting-full-star.png'
										alt='звезда рейтинга'
										class='list-bag__rating-star-icon'
									/>
								</li>
								<li class='list-bag__rating-star'>
									<img
										src='./images/icons/raiting-full-star.png'
										alt='звезда рейтинга'
										class='list-bag__rating-star-icon'
									/>
								</li>
								<li class='list-bag__rating-star'>
									<img
										src='./images/icons/raiting-full-star.png'
										alt='звезда рейтинга'
										class='list-bag__rating-star-icon'
									/>
								</li>
								<li class='list-bag__rating-star'>
									<img
										src='./images/icons/raiting-full-star.png'
										alt='звезда рейтинга'
										class='list-bag__rating-star-icon'
									/>
								</li>
								<li class='list-bag__rating-star'>
									<img
										src='./images/icons/Star-05.png'
										alt='звезда рейтинга'
										class='list-bag__rating-star-icon'
									/>
								</li>
							</ul>
							<div class='list-bag__rating-number-wrap'>
								<span class='list-bag__rating-number'>${item.rating} / 5</span>
							</div>
						</div>
						<div class='list-bag__price-wrap'>
							<span class='list-bag__price'>
								$ ${item.price} x <span class='list-bag__price-factor'>1</span>
							</span>
							<div class='list-bag__counter'>
								<div class='list-bag__minus'></div>
								<div id="quantity" class='list-bag__number'>1</div>
								<div class='list-bag__plus'></div>
							</div>
						</div>
					</div>
				</div>
			</li>
		`);
	}
}
