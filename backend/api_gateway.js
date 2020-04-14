const express = require('express');
const app = express();
const port = 3001;

app.get('/',(req,res) => {
  console.log(req);
  res.send(JSON.stringify(
    {street:'2 Richard Court',city:'Lincoln Park',state:'NJ'}
  ));

});

app.listen(port, () => {
  console.log('Backend listening on port: ',port);
});
