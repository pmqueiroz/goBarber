import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);

const port = 3333;

app.listen(3333, () => {
	console.log(`🚀 Running on port\xa0${port}`);
});
