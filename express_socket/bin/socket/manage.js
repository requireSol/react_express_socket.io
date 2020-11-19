var sharedsession = require("express-socket.io-session");

module.exports = (io, session) => {

    io.use(sharedsession(session, {
        autoSave: true
    }));

    io.sockets.on('connection', function (socket) {
        console.log("Connected: " + socket.handshake.session.id)
        
        require('./listener')(socket, io)

        socket.on('disconnect', function () {
            console.log("Disconnected: " + socket.handshake.session.id)
        });

    });

}







