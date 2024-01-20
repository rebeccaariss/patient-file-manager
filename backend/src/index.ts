import * as admin from 'firebase-admin';
const serviceAccount = require('../service_account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

import { ApolloServer, ApolloError, ValidationError, gql } from 'apollo-server';

// GraphQL code here (define the shape of the data available on the server)
const typeDefs = gql`

`
// Resolvers define the technique for fetching the types in the schema (how to
// return the data to the client through the API)
const resolvers = {

};