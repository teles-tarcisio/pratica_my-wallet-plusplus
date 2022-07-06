import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { userRepository } from "../repositories/index.js";

export async function createNewUser({ name, email, password }) {

  const existingUsers = await userRepository.getUsersByEmail(email);
  if (existingUsers.rowCount > 0) {
    throw {
      type: "conflict",
      message: "Email already registered.",
    }
  }

  const hashedPassword = bcrypt.hashSync(password, 12);

  const newUserData = { name, email, hashedPassword };

  await userRepository.registerUser(newUserData);
}

export async function logInUser({ email, password }) {

  const { rows } = await userRepository.getUsersByEmail(email);
  
  const [user] = rows;

  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw {
      type: "unauthorized",
      message: "Incorrect email/password.",
    }
  }

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET
  );

  return token;
}