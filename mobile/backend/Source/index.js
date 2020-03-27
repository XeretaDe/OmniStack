const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(routes);


app.listen(3333); 



/*
Query -> Filtros dos recursos /users?nome=Rodrigo
Route -> Identificação dos recursos /user/:id
Request Body -> Requisição de itens, cria ou altera recursos

/users -> recurso
https://localhost:3333 -> rota

*/