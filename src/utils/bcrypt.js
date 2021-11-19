import bcrypt from 'bcrypt';

/**
 * Bcrypt service
*/
class BcryptService {
	/**
	 * @param {string} password
	 * @returns {string} function to hash password
	*/
	static hashPassword(password) {
		return bcrypt.hashSync(password, Number(10));
	}

	/**
	 * @param {string} plainPassword
	 * @param {string} hashPassword
	 * @returns {boolean} function to compare passwords
	*/
	static comparePassword(plainPassword, hashPassword) {
		return bcrypt.compareSync(plainPassword, hashPassword);
	}
}

export default BcryptService;
