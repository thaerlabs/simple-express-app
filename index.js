const express = require('express');
const PORT = process.env.PORT || '3000';

const app = express();

app.get('/', (req, res) => {
  res.send('Sending the cookies');
})

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
})