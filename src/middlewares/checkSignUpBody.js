export default function checkSignUpBody(req, res, next) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw {
      type: "unprocessableEntity",
      message: "Invalid name/email/password."
    }
  }

  next();
}