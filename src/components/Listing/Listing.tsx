import { TData, TListing } from '../../models/listingModel';
import classes from './listing.module.scss';


export const Listing = ({ items = [] }: TListing) => {
	console.log(items);

	return (
		<div className={classes['item-list']}>
			{items.map((item: TData) =>
				<div className={classes['item']} key={item.listing_id}>
					<div className={classes['item-image']}>
						<a href={item.url}>
							<img src={item.MainImage.url_570xN ? item.MainImage.url_570xN : '../../assets/nopic.webp'} className={classes['image']} />
						</a>
					</div>
					<div className={classes['item-details']}>
						<p className={classes['item-title']}>
							{item.title != null ? item.title.length <= 50 ? item.title : item.title.slice(0, 50) + '...' : ''}
						</p>
						<p className={classes['item-price']}>
							${item.price}
						</p>
						<p className={classes['item-quantity'] + ' ' + classes['level-medium']}>
							{item.quantity} left
						</p>
					</div>
				</div>
			)}
		</div>
	)
}
