import mongoose from 'mongoose'
import { config } from './config.js'

export async function connectDatabase() {
  mongoose.set('strictQuery', true)
  await mongoose.connect(config.MONGO_URI)
  console.info('Connected to MongoDB')
}
