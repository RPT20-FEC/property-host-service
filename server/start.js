const app = require('./index.js');
const PORT = process.env.PORT;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`listening on port ${PORT}`);
});