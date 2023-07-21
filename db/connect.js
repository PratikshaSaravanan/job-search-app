import mongoose from 'mongoose'
const connectDB = (url) =>{
    return mongoose.connect(url) //mongoose connect returns a promise
}
export default connectDB
