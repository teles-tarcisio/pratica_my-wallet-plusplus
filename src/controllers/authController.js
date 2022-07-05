import bcrypt from "bcrypt";
import connection from "../database.js";

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

  await userServices.logInUser({ email, password });

  /*
  try {
    
    const { rows } = await connection.query(
      `SELECT * FROM "users" WHERE "email"=$1`,
      [email]
    );
    const [user] = rows;

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.sendStatus(401);
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET
    );

    res.send({
      token,
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
  */
}
