import './App.css';
import { Listing } from './components/Listing';
import { Films } from './components/Films';
import { TData } from './models/listingModel';
import dataSourse from './etsy.json';

function App() {
	const parsedData: TData[] = JSON.parse(JSON.stringify(dataSourse));
	// console.log(parsedData)

	const data: TData[] = parsedData.map((element: TData) => {
		const url_570xN: string = element.MainImage?.url_570xN;
		const { listing_id, url, title, currency_code, price, quantity }: TData = element;
		return { listing_id, url, MainImage: { url_570xN }, title, currency_code, price, quantity }
	});

	// console.log(data);

	return (
		<>
			<Films />
			<Listing items={data} />
		</>
	)
}

export default App