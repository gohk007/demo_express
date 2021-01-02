const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('It works...updated now from developer');
});



app.get('/Products', (req, res) => {
res.send('Products listing');	
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 on port ${process.env.PORT || 3000}`);
});
