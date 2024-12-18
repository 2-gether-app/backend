import express, { type Request, type Response } from 'express';
import 'dotenv/config';
import loginRoute from './user/login';
import createAccountRoute from './user/createAccount';
import getUserRoute from './user/getUser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Supabase + Express! ');
});
app.use('/user/create-account', createAccountRoute);
app.use('/user/login', loginRoute);
app.use('/user/getUser', getUserRoute);

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
