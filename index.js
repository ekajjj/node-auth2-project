const server = require('./api/server.js');

const port = process.env.PORT || 3400;
server.listen(port, () => console.log(`\n** Running on port port ${port} **\n`));
