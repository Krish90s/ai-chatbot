import express, { type Request, type Response } from 'express';
import dotenv from "dotenv"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});
app.get('/api/hello', (req: Request, res: Response) => {
  res.json({message : "Hello World!"});
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});