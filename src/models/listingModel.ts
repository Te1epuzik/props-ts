export type TData = {
	listing_id: string;
	url: string;
	MainImage: {
		url_570xN: string;
	};
	title: string;
	currency_code: string;
	price: string;
	quantity: number;
}

export type TListing = {
	items: TData[];
}