import"./modulepreload-polyfill-B5Qt9EMX.js";import{B as i,S as l,L as t}from"./firebase-VM5qsLFT.js";class g{constructor(){this.listItemsBag=document.getElementById("bagList")}renderBagItem(s){return this.listItemsBag.innerHTML+=`<li class='list-bag__item'>
				<div class='list-bag__item-wrap'>
					<div class='list-bag__img-wrap'>
						<img
							class='list-bag__img'
							src='${s.imageURL}'
							alt='${s.model}'
						/>
					</div>
					<div class='list-bag__item-body'>
						<h3 class='list-bag__title'>${s.model}</h3>
						<span class='list-bag__color'>${s.series}</span>
						<p class='list-bag__description'>
							${s.descShort}
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
								<span class='list-bag__rating-number'>${s.rating} / 5</span>
							</div>
						</div>
						<div class='list-bag__price-wrap'>
							<span class='list-bag__price'>
								$ ${s.price} x <span class='list-bag__price-factor'>1</span>
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
		`}}class r{constructor(){this.bagModel=new i,this.bagView=new g,this.storage=new l,this.localStorage=new t}init(){}}const n=new r;n.init();console.log("Hello wordl");
