import express from 'express';
import AuthRoute from './auth';

const app = express();

app.use('/auth', AuthRoute);

export default app;
