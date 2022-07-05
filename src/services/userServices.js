import bcrypt from "bcrypt";

import { userRepository } from "../repositories/index.js";

export async function createNewUser({ name, email, password }) {

  await userRepository.getUsersByEmail(email);

  const hashedPassword = bcrypt.hashSync(password, 12);

  const newUserData = { name, email, hashedPassword };

  await userRepository.registerUser(newUserData);
}

export async function logInUser({ email, password }) {

  const await userRepository.getUsersByEmail

}