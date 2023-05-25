const productsModel = require("./products.model");

module.exports = {
	Query: {
		products: () => {
			console.log("Getting the products...");
			return productsModel.getAllProducts();
		},
		productsByPrice: (_, args) => {
			return productsModel.getProductsByPrice(args.min, args.max);
		},
		product: (_, args) => {
			return productsModel.getProductById(args.id);
		},
	},
	Mutation: {
		// addNewProduct(id: ID!, description: String!, price: Float!): Product
		addNewProduct: (_, args) => {
			const { id, description, price } = args;
			return productsModel.addNewProduct(id, description, price);
		},
		// addProductReview(id: ID!, rating: Float!, comment: String): Product
		addProductReview: (_, args) => {
			const { id, rating, comment } = args;
			return productsModel.addProductReview(id, rating, comment);
		},
	},
};
