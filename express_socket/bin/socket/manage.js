var sharedsession = require("express-socket.io-session");
let countSchema = require('../../models/countSchema')
module.exports = (io, session) => {

    io.use(sharedsession(session, {
        autoSave: true
    }));

    io.sockets.on('connection', async function (socket) {
        console.log("Connected: " + socket.handshake.session.id)

        let initAmount = 0;
        let documents = await countSchema.find({});
        if(documents.length !== 0){
            initAmount = documents[0].amount
        }
        socket.emit("updateAmount", initAmount)
        
        require('./listener')(socket, io)

        socket.on('disconnect', function () {
            console.log("Disconnected: " + socket.handshake.session.id)
        });

    });

}







