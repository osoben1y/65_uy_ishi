import express from 'express';
import { config } from 'dotenv';
import { connectDB } from './db/connectDB.js';
import router from './routes/users.routes.js';
import articleRouter from './routes/article.routes.js'
config();

const app = express();
const PORT = Number(process.env.PORT);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs')
app.set('views', './views');

await connectDB();

app.use('/user', router);
app.use('/article', articleRouter);

app.listen(PORT, () => console.log('Server running on port', PORT));