const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/items');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/items', itemRoutes);


mongoose.connect(process.env.MONGODB_URI, {
})
.then(() => {
    console.log('Connected to MongoDB')
})
.catch((error) => {
    console.log(error)
})


app.get('/', (req, res) => {
    res.send('API is running...');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
