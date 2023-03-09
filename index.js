const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = API_PORT || 4001;

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

