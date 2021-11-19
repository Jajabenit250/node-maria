import Joi from 'joi';
import ResponseUtil from "../response";


export const validateLoginBody = (req, res, next) => {
	const schema = Joi.object({
		username: Joi.string().required().messages({
			'any.required': 'username is required',
			'string.empty': 'username is not allowed to be empty',
		}),
		password: Joi.string().required().messages({
			'any.required': 'password is required',
			'string.empty': 'password is not allowed to be empty',
		}),
	}).options({ abortEarly: false });

	const { error } = schema.validate(req.body);

	if (error) {
		const errors = error.details.map(err => err.message);
		return ResponseUtil.setError(res, 400, errors);
	}
	next();
};

