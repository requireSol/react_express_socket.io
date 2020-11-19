let countSchema = require('../../models/countSchema')
var ObjectId = require('mongoose').Types.ObjectId;
let {update} = require('./emiter')

require('../../mongoConnect')
module.exports = (socket, io) => {
    socket.on('setAmount', async amount => {
        let documents = await countSchema.find({});
        if(documents.length === 0){
          await countSchema.create({ amount: amount });
        }else{
          await countSchema.updateOne({ _id: ObjectId(documents[0]._id) }, {amount: amount}).catch((error)=> console.log(error));
        }
        console.log('setAmount ', amount);
        update(io, amount);
      });
}