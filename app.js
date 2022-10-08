
const express = require('express');
const app = express();
const port = 8080
const { readFile } = require('fs').promises;

app.use(express.static('public'))

app.get('/', async (req, res) => {
  res.send( await readFile('./index.html', 'utf-8'))
})

app.get('/about', async (req, res) => {
  res.send( await readFile('./about.html', 'utf-8'))
})

app.get('/contact-me', async (req, res) => {
  res.send( await readFile('./contact-me.html', 'utf-8'))
})

app.get('/thankyou', async (req, res) => {
  res.send( await readFile('./thankyou.html', 'utf-8'))
})

app.use( async (req, res) => {
  res.status(404).send( await readFile('./404.html', 'utf8'));
});

app.listen(port, () => {
  console.log(`App started listening on port ${port}`)
})
