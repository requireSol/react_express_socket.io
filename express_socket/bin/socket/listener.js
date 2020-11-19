module.exports = (socket, io) => {

    socket.on('hey', data => {
        console.log('hey ', data);
        io.sockets.emit("updated")
      });
      
}