const products = [
	{
		id: "redshoe",
		description: "red shoe description",
		reviews: [],
		price: 44.4,
	},
	{
		id: "bluejean",
		description: "blue jean description",
		reviews: [],
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

const addNewProduct = (id, description, price) => {
	const newProduct = {
		id,
		price,
		description,
		reviews: [],
	};

	products.push(newProduct);
	return newProduct;
};

const addProductReview = (id, rating, comment) => {
	const foundProduct = products.find((product) => product.id === id);
	foundProduct.reviews = new Array({ rating, comment });

	return foundProduct;
};

module.exports = {
	getAllProducts,
	getProductsByPrice,
	getProductById,
	addNewProduct,
	addProductReview,
};
