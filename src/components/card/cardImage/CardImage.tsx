interface Props {
	value: string;
}
const CardImage = ({ value }: Props) => {
	return (
		<a href="#">
				<img
					className="p-12 rounded object-scale-down h-120 w-200"
					src={value}
					alt="product image"
					style={{ height: "300px", width: "400px" }}
				/>
			</a>
	);
};

export default CardImage;