import { useState } from "react";
import { Product } from "../categoySelector/CategorySelector.types";

const useCard = () => {
	const [showFullDescription, setShowFullDescription] = useState(false);

	const toggleDescription = () => {
		setShowFullDescription(!showFullDescription);
	};

	const truncateText = (text: string, limit: number) => {
		return text.length > limit ? text.substring(0, limit) + "..." : text;
	};
    return {toggleDescription,
		truncateText,
		showFullDescription,
		setShowFullDescription};
}

export default useCard;