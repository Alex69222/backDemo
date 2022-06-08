
import express, {Request, Response} from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
    let message = 'Yo Bro! What\'s up! This is my test deploy! Where\'s yours?';
    res.send(message)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}! YO!`)
})