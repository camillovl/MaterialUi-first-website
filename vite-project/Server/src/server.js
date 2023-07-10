const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const cardapio = require('./data/cardapioData.js');
const header = require('./data/headerData.js') // Importar o dicionário do arquivo separado

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('../public'));

// Configurando as rotas do servidor
app.get('/cardapio', (req, res) => {
  return res.status(200).json(cardapio); // Utilizar o dicionário importado
});

app.get('/header', (req, res) => {
    return res.status(200).json(header); // Utilizar o dicionário importado
  });
  

// Iniciando o servidor
const PORT = 5555;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
