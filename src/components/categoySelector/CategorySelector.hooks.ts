import { useState } from "react";
import { Product } from "./CategorySelector.types";

const useCategorySelector = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>("");

	const [data, setData] = useState<Product[]>([]);

	const getSearchResults = async () => {
		try {
			if (selectedCategory) {
				if (selectedCategory === "category") {
					const response = await fetch(
						`https://fakestoreapi.com/products`
					);
					const jsonData = await response.json();
					setData(jsonData);
				} else {
					const response = await fetch(
						`https://fakestoreapi.com/products/category/${selectedCategory}`
					);
					const jsonData = await response.json();
					setData(jsonData);
				}
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedCategory(event.target.value.toLowerCase());
	};


	return {
		selectedCategory,
		data,
		getSearchResults,
		handleChange,
	};
};

export default useCategorySelector;
