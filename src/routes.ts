import { Request, Response, Router } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.status(200)
    res.render('index', { test1: 'Olá', test2: 'Mundo!'}) 
})

export default router