import { Product } from "../categoySelector/CategorySelector.types";
import Description from "./description/Description";
import Price from "./price/Price";
import Title from "./title/Title";
import CardImage from "./cardImage/CardImage";
interface Props {
	value: Product;
}
const Card = ({ value }: Props) => {
	return (
		<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<CardImage value={value.image} />
			<div className="px-5 pb-5">
				<Title value={value.title} />
				<Description value={value.description}/>
				<div className="flex items-end justify-start">
					<Price value={value.price} />
				</div>
			</div>
		</div>
	);
};

export default Card;
