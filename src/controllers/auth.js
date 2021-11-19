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
  static async register(req, res) {
    try {
      const { username, password } = req.body;
      const searchUser = await QueryService.findOne(User, {
        where: { username },
      });

      if (searchUser !== null) {
        return ResponseService.setError(res, 404, "User Already Registered");
      }

      const registerUser = await QueryService.create(User, {
        username,
        password: BcryptService.hashPassword(password),
      });
      ResponseService.setSuccess(res, 200, "User Succesfully Registered", registerUser);
    } catch (error) {
      ResponseService.setError(res, 404, "errorMessage");
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await QueryService.findOne(User, {
        where: { username },
      });

      if (user) {
        const isPasswordMatch = BcryptService.comparePassword(
          password,
          user.dataValues.password
        );
        // if (password !== user.dataValues.password) {

        if (!isPasswordMatch) {
          return ResponseService.setError(
            res,
            403,
            "Your password is incorrect"
          );
        }
        const newData = {
          username: user.dataValues.username,
        };
        let token = TokenUtil.generateToken(newData);
        let verifT = TokenUtil.verifyToken(token);
        console.log(verifT);
        console.log("----------------------------")
        return ResponseService.setSuccess(
          res,
          200,
          "Logged in successfully!",
          token
        );
      }
      return ResponseService.setError(res, 404, "user Not Registered");
    } catch (error) {
      ResponseService.setError(res, 404, "errorMessage");
    }
  }
}
