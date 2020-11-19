let mongoose = require('mongoose')
const { Schema } = mongoose;

const countSchema = mongoose.model('count', new Schema({ amount: Number }));
module.exports = countSchema;