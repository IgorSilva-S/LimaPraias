const { z } = require('zod');

// middleware to validate the request body against a Zod schema
const validate = (schema) => {
	return (req, res, next) => {
		try {
			// parse the request body against the schema
			req.body = schema.parse(req.body);
			return next();
		} catch (err) {
			// handle the error
			if (err instanceof z.ZodError) {
				return res.status(422).json({
					success: false,
					status: 422,
					message: 'Invalid data.',
					errors: err.errors,
				});
			}
			return next(err);
		}
	};
};

module.exports = validate;
