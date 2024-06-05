import classes from './films.module.scss';
import { Stars } from './Stars';

export const Films = () => {
	const rate: number = 3;

	return (
		<div className={classes['films__card']}>
			<Stars count={rate}/>
		</div>
	)
}