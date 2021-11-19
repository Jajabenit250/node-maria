import models from "../database/models";
import TokenUtil from "../utils/token";
import ResponseService from "../utils/response";
import QueryService from "../utils/query";
import BcryptService from "../utils/bcrypt";

const { User } = models;
/**
 * User Authentication controller with User-Registration
 * User-Login
 * User-Reset-Password
 *
 */

export default class UserAuthController {

  static async login(req, res) {
    try {
		console.log(req.body);
    const { userName, password } = req.body;
		const user = await QueryService.findOne(User, {
      where: { userName },
    });

	console.log(user);
			// if (user){
			// 	const isPasswordMatch = BcryptService.comparePassword(
			// 		password,
			// 		user.dataValues.password,
			// 	);
			// 	if (!isPasswordMatch) {
			// 		return ResponseService.setError(res, 403, 'Your password is incorrect');
			// 	};
			// 	const newData = {
			// 		userName: user.dataValues.userName,
			// 	}
			// 	let token = TokenUtil.generateToken(newData);
				return ResponseService.setSuccess(res, 200, 'Logged in successfully!', userName);
			// } 
    } catch (error) {
        ResponseService.setError(res, 404, "errorMessage");
      }
  }
}
