import { FC } from 'react';
import { TData, TListing } from '../../models/listingModel';
import classes from './listing.module.scss';


export const Listing: FC<TListing> = ({ items }) => {
	console.log(items);

	return (
		<>
			{
				items.map((item: TData) =>
					<div className={classes['item-list']}>
						<div className={classes['item']}>
							<div className={classes['item-image']}>
								<a href={item.url}>
									<img src={item.MainImage.url_570xN} />
								</a>
							</div>
							<div className={classes['item-details']}>
								<p className={classes['item-title']}>{item.title}</p>
								<p className={classes['item-price']}>{item.price}</p>
								<p className={classes['item-quantity'] + ' ' + classes['level-medium']}>12 left</p>
							</div>
						</div>
					</div>
				)
			}
		</>
	)
}
