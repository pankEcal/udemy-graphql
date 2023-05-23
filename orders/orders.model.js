const orders = [
	{
		date: "2022-06-25",
		subtotal: 399.65,
		items: [
			{
				product: {
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
				quantity: 3,
			},
		],
	},
];

const getAllOrders = () => {
	return orders;
};

module.exports = { getAllOrders };
