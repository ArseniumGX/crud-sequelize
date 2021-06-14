import { Request, Response, Router } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.status(200)
    res.render('index')
})

export default router