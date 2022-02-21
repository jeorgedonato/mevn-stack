import express, { Request, Response, Application, request } from "express";
import { graphqlHTTP } from 'express-graphql'
import bodyParser from "body-parser";
const PORT = process.env.PORT || 3002;
const app: Application = express();
app.use(express.json());

app.use('/graphql', graphqlHTTP( () => ({
        schema,
        rootValue: resolver,
        graphiql: true,
        context: {
            request,
            response
        },
    })
))

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}${'/graphql'}`)
})