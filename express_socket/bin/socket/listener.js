module.exports = (socket, io) => {

    socket.on('updated', data => {
        console.log('updated ', data);
        io.sockets.emit("updated", data)
      });
      
}