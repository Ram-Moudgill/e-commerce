import mongoose from 'mongoose'
const db = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    })
    console.log(`database connected ${connect.connection.host}`)
    console.log(process.env.PORT)
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}
export default db
