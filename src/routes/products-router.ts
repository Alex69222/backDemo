import {Request, Response, Router} from "express";
const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]


export const productsRouter = Router({})

productsRouter.get('/', (req: Request, res: Response) => {
    if (req.query.title) {
        let titleString = req.query.title.toString()
        res.send(products.filter(p => p.title.indexOf(titleString) > -1))
    }
    res.send(products)
})
productsRouter.post('/', (req: Request, res: Response) => {
    const newProduct = {
        id: (+new Date()),
        title: req.body.title
    }
    products.push(newProduct)
    res.status(201).send(newProduct)
})
productsRouter.get('/:id', (req: Request, res: Response) => {

    let product = products.find(p => p.id === +req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})
productsRouter.put('/:id', (req: Request, res: Response) => {

    let product = products.find(p => p.id === +req.params.id)
    if (product) {
        product.title = req.body.title
        res.send(product)
    } else {
        res.send(404)
    }
})
productsRouter.delete('/:id', (req: Request, res: Response) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1)
            res.send('204')
            return
        } else {
            res.send(404)
        }
    }
    let product = products.find(p => p.id === +req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})