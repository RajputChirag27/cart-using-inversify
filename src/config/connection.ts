// Database configuration
import mongoose from 'mongoose'
import { dburl } from './database.config'
const url: string = dburl.url

export default mongoose
  .connect(url)
  .then(() => {
    console.log('Connected to database')
  })
  .catch((error) => {
    console.error('Database connection error:', error)
    process.exit(1)
  })
