import { FC } from 'react';
import classes from './stars.module.scss';
import { TStarsProps } from '../../../models/filmsModel';
import { Star } from './Star';


export const Stars: FC<TStarsProps> = ({ count = 0 }) => {
	const stars: number[] = [];
	if (count > 0 || count < 5) {
		for (let i = 0; i < count; i++) {
			stars.slice(0, stars.length)
			stars.push(i )
		}
	}

	return (
		<ul className={classes['stars']}>
			{stars.map((index) =>
				<Star key={index} />
			)}
		</ul>
	)
}
