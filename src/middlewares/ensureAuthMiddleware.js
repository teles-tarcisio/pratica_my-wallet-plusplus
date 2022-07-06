import jwt from "jsonwebtoken";

export default async function ensureAuthMiddleware(req, res, next) {
  const authorization = req.headers.authorization || "";
  const token = authorization.replace("Bearer ", "");

  if (!token) {
    throw {
      type: "unauthorized",
      message: "Incorrect email/password.",
    }
  }

  let user;
  try {
    user = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    throw {
      type: "unauthorized",
      message: "Incorrect email/password.",
    }
  }

  res.locals.user = user;
  next();
}