import './App.css';
import { Listing } from './components/Listing';
import { TData } from './models/listingModel';
import dataSourse from './etsy.json';

function App() {
	const parsedData: TData = JSON.parse(JSON.stringify(dataSourse));

	const data: TData[] = parsedData.map((element: TData) => {
		const { listing_id, url, MainImage, title, currency_code, price, quantity }: TData = element;
		return { listing_id, url, MainImage, title, currency_code, price, quantity }
	});

	console.log(data);

	return (
		<>
			<Listing item={data} />
		</>
	)
}

export default App