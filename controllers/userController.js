import { connectionPool } from "../config/db.js";

export const viewUser = (req, res) => {
  connectionPool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("connected to database " + connection.threadId);
    // Don't forget to release the connection after use

    connection.query("SELECT * FROM users", (err, rows) => {
      connection.release();

      if (!err) {
        res.render("home", { rows });
      } else {
        console.log(err);
      }
      console.log(`The data from user table: \n`, rows);
    });
  });
};
