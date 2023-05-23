const express = require("express");
const path = require("path");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const typesArray = loadFilesSync("**/*", {
	extensions: ["graphql"],
});
const resolversArray = loadFilesSync("**/*", {
	extensions: ["resolvers.js"],
});

const schema = makeExecutableSchema({
	typeDefs: typesArray,
	resolvers: resolversArray,
});

const app = express();
app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
);

app.listen(3000, (req, res) => {
	console.log("Running GraphQL sever...");
});
