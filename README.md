schema first
or
code first

BACKEND:

libs:

type-graphql - create api in graphql(with node) using typescript
graphql 
apollo-server
class-validator 
reflect-metadata

for ts: npm i typescript @types/node ts-node-dev -D

npx tsc --init


TS Config:

    "target": "es2018",
    "lib": ["es2018", "esnext.asynciterable"], 
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true, 
    "strictPropertyInitialization": false, 


FRONTEND:

npm i @apollo/client graphql
