const express = require('express');
const tasksRoutes = require('./routes/tasks'); 


const app = express();
const PORT = 3000;

// Middleware for parsing JSON request bodies

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/tasks', tasksRoutes);

// Rota padrão

app.get('/', (req, res) => {
  res.send('API de Tarefas');
});

// Iniciando o servidor

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});