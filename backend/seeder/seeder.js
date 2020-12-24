// database seeder script
import userModel from '../models/userModel.js'
import productModel from '../models/productModel.js'
import orderModel from '../models/orderModel.js'
import users from './userData.js'
import products from './productdata.js'
import db from '../config/db.js'
import dotenv from 'dotenv'
dotenv.config()
db()
const importData = async () => {
  try {
    await userModel.deleteMany()
    await productModel.deleteMany()
    await orderModel.deleteMany()
    const savedUsers = await userModel.insertMany(users)
    const admin = savedUsers[0]._id
    const sampleProducts = products.map((product) => {
      return { ...product, user: admin }
    })
    await productModel.insertMany(sampleProducts)
    console.log('data imported successfully')
    process.exit()
  } catch (error) {
    console.error(`error in importing ${error}`)
    process.exit(1)
  }
}
const destroyData = async () => {
  try {
    await userModel.deleteMany()
    await productModel.deleteMany()
    await orderModel.deleteMany()
    console.log('data destroyted successfully')
    process.exit()
  } catch (error) {
    console.error(`error in destroying data ${error}`)
    process.exit(1)
  }
}
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
