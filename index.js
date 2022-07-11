const express = require ('express');
const mongoose = require ('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')







const app = express();
const PORT = 5050;
dotenv.config();
app.use(express.json())
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRoute)





mongoose.connect(process.env.DB_URL).then(()=>{
    console.log('Datebase connected Successfully...')
}).catch((err)=>{
    console.log(err)
})



app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server runnng os port: http://localhost:${PORT}`)
})   