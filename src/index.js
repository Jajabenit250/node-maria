import express from 'express';
import cors from 'cors';
import path from 'path';
import { config } from 'dotenv';
import helmet from 'helmet';
import ResponseService from './utils/response';
import routes from './routes/index';

config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', routes);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
	return ResponseService.setSuccess(res, 200, 'GTWorld APIs');
});
app.use('/', (req, res) => {
	return ResponseService.setSuccess(res,
		404,
		'Route not found! Please provide correct route',
	);
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});

export default app;