import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    {/* Englobar app com ApolloProvider e passar o client como parâmetro */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>

  </React.StrictMode>,
)
