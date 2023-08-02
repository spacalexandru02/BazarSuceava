import { useState } from "react";

const useDescription = () => {
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

export default useDescription;