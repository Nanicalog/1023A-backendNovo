import 'dotenv/config';
import express from 'express';

console.log(process.env.DBUSER);  

const app = express();

app.get('/', (req, res) => {
    res.send(`DBUSER: ${process.env.DBUSER}`);
});

app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000 moh!');
});
