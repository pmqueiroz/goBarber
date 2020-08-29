import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import uploadConfig from './config/upload';

import './database';

const app = express();
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

const port = 3333;

app.listen(3333, () => {
	console.log(`🚀 Running on port\xa0${port}`);
});
