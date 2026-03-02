import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import productRouter from "./routes/routes.js"

const PORT = process.env.PORT || 3001

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, "public/index.html"))
// })

app.use('/products', productRouter)

// 404 route
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public/404.html'))
  // res.status(400).send("404 not found")
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})