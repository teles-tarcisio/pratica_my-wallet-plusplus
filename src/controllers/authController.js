import {
  userServices,
} from "../services/index.js";


export async function signUp(req, res) {

  const { name, email, password } = req.body;

  await userServices.createNewUser({ name, email, password });

  return res.sendStatus(201);
}

export async function signIn(req, res) {

  const { email, password } = req.body;

  const token = await userServices.logInUser({ email, password });

  return res.send({
    token,
  });
}
