
module.exports = (socket, io) => {
    socket.on('updated', data => {
        console.log('updated ', data);
        require('./emiter')(io, data)
      });
}