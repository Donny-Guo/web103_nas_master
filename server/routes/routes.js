import express from 'express'
import productData from "../data/data.js"
import { fileURLToPath } from 'url';
import path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json(productData)
})

router.get('/:productId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/product.html"))
})

export default router