const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');

const modelsPath = path.resolve('server', 'models');

//mongodb connection
mongoose.connect('mongodb://localhost:27017/1995_api', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('MongoDB connected to the 1995 API database'));

fs.readdirSync(modelsPath).forEach(file => {
    if(reg.test(file)){
        require(path.join(modelsPath, file));
    }
});