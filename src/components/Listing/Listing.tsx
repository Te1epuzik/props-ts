import classes from './listing.module.scss';
import { TData } from '../../models/listingModel';
import dataSourse from './etsy.json';

export const Listing = () => {
	const data: TData = [];

	JSON.parse(dataSourse).forEach(element => {
		{ listing_id, url, MainImage, title, currency_code, price, quantity }: TData<string> = element;
	});

	console.log(dataSourse);
	return (
		<div></div>
	)
}
