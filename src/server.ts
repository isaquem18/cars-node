import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {

  const { name } = req.query;

  const user = {
    message: `Olá, ${name}!`,
    name,
    age: 26
  }

  return res.status(200).json(user);
});

export default app;
