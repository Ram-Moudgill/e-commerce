import express from 'express'
import dotenv from 'dotenv'
import db from './config/db.js'
import cors from 'cors'
import productRoute from './routes/product.js'
cors()
const app = express()
dotenv.config()
db()
app.use(express.json({ extended: false }))
//API routes
app.use('/api/product', productRoute)
app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`)
})
