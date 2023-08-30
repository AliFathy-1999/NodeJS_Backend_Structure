require('dotenv').config();
const app = require('./app.js');
const { PORT } = require('./config/index.js');
const port = PORT || 4000;

app.listen(port, () => {
  console.log(`Server Running here 👉 http://localhost:${port}`);
});
