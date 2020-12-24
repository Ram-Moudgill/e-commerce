import express from 'express'
const router = express.Router()
import productModel from '../models/productModel.js'

//get all products
//access public
//method GET
router.get('/', async (req, res) => {
  try {
    const products = await productModel.find({})
    if (!products) {
      res.status(404).json({ msg: 'no product' })
    } else {
      res.json(products)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: 'Failed Server Error' })
  }
})

// get single product
// access public
// method GET
router.get('/:id', async (req, res) => {
  try {
    const productid = req.params.id
    const product = await productModel.findById(productid)
    if (!product) {
      res.status(404).json({ msg: 'no product' })
    } else {
      res.json(product)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: 'Failed Server Error' })
  }
})

export default router
