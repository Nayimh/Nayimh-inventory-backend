const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());




const database = module.exports = () => {
   
    const connectionParams = {
        useNewUrlParser : true,
        useUnifiedTopology: true, 
       
        
    }
    try {
        mongoose.connect(
            "mongodb+srv://mongoose:h57lhKlOZ7yZE08A@cluster0.cetyr.mongodb.net/?retryWrites=true&w=majority", connectionParams
       
        );
        console.log("Database connected successfully");
    } catch (error) {
        console.log("connection failed");
        console.log(error);
        process.exit(1);
    }

}
    
database();


app.get('/', (req, res) => {
    res.send('My server is listening on port ' + port);
})

app.post('/test', (req, res) => {
    res.send('Hello World');
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});