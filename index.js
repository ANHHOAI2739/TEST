import express from 'express';
import 'dotenv/config';
import router from './routes/index.js';
import { connectToDatabase } from './db.js';

const app = express();
const PORT = 4000;

connectToDatabase();

app.use(express.json());
//
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
