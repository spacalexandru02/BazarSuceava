interface Props {
	value: string;
}
const Title = ({ value }: Props) => {
	return (
		<h5 className="text-m font-semibold tracking-tight text-gray-900 dark:text-white">
			{value}
		</h5>
	);
};

export default Title;
