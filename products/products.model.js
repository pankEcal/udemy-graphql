const products = [
	{
		id: "redshoe",
		description: "red shoe description",
		reviews: [
			{
				rating: 4.5,
				comment: "nice good enough shoe",
			},
		],
		price: 44.4,
	},
	{
		id: "bluejean",
		description: "blue jean description",
		reviews: [
			{
				rating: 3.5,
				comment: "nice good enough blue jean",
			},
		],
		price: 25.4,
	},
];

const getAllProducts = () => {
	return products;
};

const getProductsByPrice = (min, max) => {
	return products.filter(
		(product) => product.price >= min && product.price <= max
	);
};

const getProductById = (id) => {
	const product = new Array(products.find((product) => product.id === id));
	return product;
};

module.exports = { getAllProducts, getProductsByPrice, getProductById };
