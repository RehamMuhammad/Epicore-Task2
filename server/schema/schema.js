const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString} = graphql;


const featureType = new GraphQLObjectType ({
    name: 'Feature',
    fields: () => ({
        id:{type:GraphQLString },
        name:{type:GraphQLString}
    })
});