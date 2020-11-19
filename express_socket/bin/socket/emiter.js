module.exports = {
       update: (io, amount) => io.sockets.emit("updateAmount", amount)
}