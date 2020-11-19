module.exports = (io, data) => {
        io.sockets.emit("updated", data)
}