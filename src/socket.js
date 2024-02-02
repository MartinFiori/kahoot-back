const { Server } = require("socket.io");

module.exports = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });


  return io
};
