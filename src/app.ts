import express from 'express'
import dotenv from 'dotenv'
import router from './routes'

dotenv.config({ path: '.env.test' })

const app = express()

app.use(express.json())
app.use(router)
app.set('port', process.env.PORT)
app.set('view engine', 'pug')
app.set('views', __dirname + "/views")



export default app