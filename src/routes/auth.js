import express from 'express';
import AuthController from '../controllers/auth';

import {
	validateLoginBody
} from '../utils/validations/auth';


const router = express.Router();

router.post(
	'/login',
	validateLoginBody,
	AuthController.login,
);

router.post(
	'/register',
	validateLoginBody,
	AuthController.register,
);



export default router;
