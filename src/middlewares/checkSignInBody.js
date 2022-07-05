export default function checkSignInBody(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    throw {
      type: "unprocessableEntity",
      message: "Invalid name/email/password."
    }
  }

  next();
}