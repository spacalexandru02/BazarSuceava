interface Props {
	value: string;
}
const Price = ({ value }: Props) => {
	return (
		<div className="flex items-end justify-start">
			<span className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
				${value}
			</span>
		</div>
	);
};

export default Price;
