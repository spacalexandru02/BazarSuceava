import useDescription from "./useDescription.hooks";

interface Props {
	value: string;
}
const Description = ({ value }: Props) => {
	const {
		toggleDescription,
		truncateText,
		showFullDescription,
		setShowFullDescription,
	} = useDescription();
	return (
		<div>
			{showFullDescription ? (
					<p className="text-sm font-semibold tracking-tight dark:text-gray-400">
						{value}
					</p>
				) : (
					<p className="text-sm font-semibold tracking-tight dark:text-gray-400">
						{truncateText(value, 300)}
					</p>
				)}
				{value.length > 200 && (
					<button
						className="text-blue-600 hover:underline"
						onClick={toggleDescription}
					>
						{showFullDescription ? "Show less" : "Show more"}
					</button>
				)}
		</div>
	);
};

export default Description;
