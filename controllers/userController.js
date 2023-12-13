import { connectionPool } from "../config/db.js";

export const home =(req, res) =>{
  res.render('home');
}

export const viewUser = (req, res) => {
  connectionPool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("connected to database " + connection.threadId);

    connection.query("SELECT * FROM users", (err, rows) => {
      connection.release();

      if (!err) {
        res.render("users", { rows });
      } else {
        console.log(err);
      }
      console.log(`The data from user table: \n`, rows);
    });
  });
};

export const form = (req, res) => {
  res.render("add-user");
};

export const addUser = (req, res) => {
  const { email, password, type } = req.body;

  connectionPool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("connected to database " + connection.threadId);
    // User the connection
    connection.query(
      "INSERT INTO users SET  email = ?,password = ?,type = ?",
      [email, password, type],
      (err, rows) => {
        if (!err) {
          res.render("add-user", { alert: "User added successfully." });
        } else {
          console.log(err);
        }
        console.log("The data from user table: \n", rows);
      }
    );
  });
};

export const deleteUser = (req, res) => {

  connectionPool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("connected to database " + connection.threadId);

  connection.query('UPDATE users SET active = ? WHERE ID = ?', ['removed', req.params.ID], (err, rows) => {
    if (!err) {
      let removedUser = encodeURIComponent('User successeflly removed.');
      res.redirect('/?removed=' + removedUser);
    } else {
      console.log(err);
    }
    console.log('The data from beer table are: \n', rows);
  });
  });

}
