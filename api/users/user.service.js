const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into users(username, password, statsiun) 
                values(?,?,?)`,
      [
        data.username,
        data.password,
        data.statsiun
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  createStatsiun: (data, callBack) => {

    pool.query(
      `insert into alat(waktu, statsiun, alat, merek, tahun, kondisi) 
                values(?,?,?,?,?,?)`,
      [
        new Date(new Date().toUTCString()),
        data.statsiun,
        data.alat,
        data.merek,
        data.tahun,
        data.kondisi
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from users where username = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select * from users where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getStatsiunBydate: (start, end, callBack) => {
    pool.query(
      `select * from alat where DATE(waktu) BETWEEN ? AND ?`,
      [start,end],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
 getUsersByStatsiun: (stat, callBack) => {
    pool.query(
      `SELECT alat.id_alt, alat.waktu, alat.statsiun, alat.alat, alat.merek, alat.tahun, alat.kondisi  FROM users JOIN alat USING(statsiun) where username = ?`,
      [stat],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `select * from users`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update users set username=?,  password=?, statsiun=? where id = ?`,
      [
        data.username,
        data.password,
        data.statsiun,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from users where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
