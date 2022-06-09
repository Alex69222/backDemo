import express, {Request, Response} from 'express'
import bodyParser from "body-parser";
import { productsRouter} from "./routes/products-router";
import {addressesRouter} from "./routes/address-router";
const app = express()
const port = process.env.PORT || 3002

app.use(bodyParser())
app.get('/', (req: Request, res: Response) => {
    let message = 'Yo Bro! What\'s up! This is my test deploy! Where\'s yours? Hah';
    res.send(message)
})

app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}! YO!`)
})