module.exports = {
       update: (io, amount) => io.sockets.emit("updated", amount)
}