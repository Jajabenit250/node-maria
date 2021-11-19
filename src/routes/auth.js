import express from 'express';
import AuthController from '../controllers/login';

// import {
// 	validateVerificationBody,
// 	validateLoginBody
// } from '../../utils/validations/auth';


const router = express.Router();

router.post(
	'/login',
	// validateLoginBody,
	AuthController.login,
);


export default router;
