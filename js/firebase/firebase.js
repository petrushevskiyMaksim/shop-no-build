import { STORAGE_KEY } from '../constants';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDHNjCI9mEH92lrHVQFxvcs7m4UVColYCE',
	authDomain: 'shop-32ea1.firebaseapp.com',
	projectId: 'shop-32ea1',
	storageBucket: 'shop-32ea1.appspot.com',
	messagingSenderId: '48669276542',
	appId: '1:48669276542:web:e2b91678c9078b8ea09b2f',
};

const app = initializeApp(firebaseConfig);

export class Storage {
	constructor() {
		this.key = STORAGE_KEY;
		this.db = getFirestore(app);
	}

	async pull() {
		const querySnapshot = await getDocs(collection(this.db, this.key));
		const items = [];

		querySnapshot.forEach(doc => {
			items.push({
				id: doc.id,
				model: doc.data().model,
				series: doc.data().series,
				price: doc.data().price,
				imageURL: doc.data().imageURL,
				rating: doc.data().rating,
				descShort: doc.data().descShort,
				description: doc.data().description,
			});
		});

		return items;
	}
}
