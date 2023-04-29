import { ApolloClient, InMemoryCache } from '@apollo/client';

// Criar o client apontando para o backend
export const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
})