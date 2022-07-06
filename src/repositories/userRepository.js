import connection from "../database.js";

export async function getUsersByEmail(email) {
  const existingUsers = await connection.query(
    `SELECT * FROM "users" WHERE "email"=$1`,
    [email]
  );

  return existingUsers;
}

export async function registerUser(userData) {
  const { name, email, hashedPassword } = userData;
  
  await connection.query(
    `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
    [name, email, hashedPassword]
  );
}