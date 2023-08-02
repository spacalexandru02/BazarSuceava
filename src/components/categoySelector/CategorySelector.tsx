import useCategorySelector from "./CategorySelector.hooks";
import { useEffect } from "react";
import Card from "../card/Card";
import Selector from "../selector/Selector";
const CategorySelector = () => {
	const {
		selectedCategory,
		data,
		getSearchResults,
		handleChange,
	} = useCategorySelector();

	useEffect(() => {
		getSearchResults();
	}, [selectedCategory]);

	return (
		<>
			<Selector selectedCategory= {selectedCategory} handleChange = {handleChange} />
			<div className="grid grid-cols-4 gap-12 p-12">
				{data.map((values) => (
					<Card value={values} />
				))}
			</div>
		</>
	);
};

export default CategorySelector;
