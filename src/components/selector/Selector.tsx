interface Props {
	selectedCategory: string
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Selector = ({ selectedCategory, handleChange }: Props) => {
	return (
		<select
			id="large"
			value={selectedCategory}
			onChange={handleChange}
			className="grid place-items-center items-center m-12 w-7/12 px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		>
			<option value="category" selected>
				Choose a category
			</option>
			<option value="electronics">electronics</option>
			<option value="jewelery">jewelery</option>
			<option value="men's%20clothing">men's clothing</option>
			<option value="women's%20clothing">women's clothing</option>
		</select>
	);
};

export default Selector;
