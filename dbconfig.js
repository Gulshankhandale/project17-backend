const mongoose = require('mongoose');
const MONGOURI = process.env.MONGOURI;

function DBCon(){

    mongoose.connect(MONGOURI, {useNewUrlParser:true, useUnifiedTopology:true}, ()=>{

        try {
            console.log("Database is connected")
        } catch (error) {
            console.log("Something error "+error)
        }
    })
}

module.exports = DBCon;