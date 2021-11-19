import jwt from 'jsonwebtoken';

// eslint-disable-next-line require-jsdoc
class TokenUtil {
	/**
	 * @param {object} data
	 * @returns {string} function to generate a token string
	 */
	static generateToken(data) {
		return jwt.sign(data, process.env.SECRET, {});
	}

	// eslint-disable-next-line require-jsdoc
	static verifyToken(token) {
		return jwt.verify(token, process.env.SECRET, (err, decoded) => {
			if (err) {
				return err;
			}
			return decoded;
		});
	}
}

export default TokenUtil;
