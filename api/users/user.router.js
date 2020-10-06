const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  createStatsiun,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  getUsersByStatsiun,
  getStatsiunBydate,
  updateAlat,
  deleteAlat,
  deleteUser

} = require("./user.controller");

// router.get("/", checkToken, getUsers);contoh router dengan penggunaan token tambahkan checktoken di setip url
router.get("/", checkToken, getUsers);
router.post("/", checkToken, createUser);
router.post("/statsiun/", checkToken, createStatsiun);
router.patch("/statsiun/",  checkToken, updateAlat);
router.delete("/statsiun/",  checkToken, deleteAlat);



// router untuk memanggil data statsiun sesuai dengan username
router.get("/statsiun/:stat", checkToken, getUsersByStatsiun);
// router untuk memanggil data statsiun sesuai dengan tanggal rangge
router.get("/laporan/:start/:end", checkToken, getStatsiunBydate);


router.get("/:id",  getUserByUserId);
router.post("/login", login);
router.patch("/",  updateUsers);
router.delete("/",  deleteUser);

module.exports = router;
