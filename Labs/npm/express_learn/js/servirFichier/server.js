const express = require('express')
const app = express()

app.use(express.static('/public'));
app.set('view engine','html');
app.get('/', function (req, res) {
//   res.send('servir Fichier!')
res.render('index.html');
})

app.listen(3000, function () {
  console.log('servirFichier on port 3000!')
})
