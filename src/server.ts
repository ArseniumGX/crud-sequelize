import app from './app'

const port = app.get('port')

// console.log(process.env)

app.listen(port, () => console.log(`Server is running http://localhost:${port}`))