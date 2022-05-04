const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const userRoute = require('./routes/user');
const multer = require('multer');
const path = require('path');

const app = express();

app.use('/upload', express.static(path.join(__dirname, 'upload')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

dotenv.config();

mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
        app.listen(5000);
        console.log('connect to db');
    })
    .catch(err => {
        console.log(err.message);
    });

// const storage = multer.diskStorage( {
//     destination: (req, file, cb) => {
//         cb(null, "images");
//     },
//     filename: (req, file, cb) => {
//         cb(null, req.body);
//     }
// })

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload');
  },
  filename: function (req, file, cb) {
    // cb(null, file.fieldname + '-' + Date.now())
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage });

app.post('/api/upload', upload.single('file'), (req, res) => {
    res.status(200).json('file has been uploaded');
})


app.use('/api/auth', authRoute); 
app.use('/api/posts', postRoute);
app.use('/api/user', userRoute); 