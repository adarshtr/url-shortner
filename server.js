const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({extend: false}));

app.use('/',require('./routes/index'))
app.use('/api/url',require('./routes/url'))
app.use(express.static('.'));
app.get('/', function(req, res){
    res.render('index.html');
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
