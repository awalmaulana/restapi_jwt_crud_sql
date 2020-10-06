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
router.get("/", getUsers);
router.post("/",  createUser);
router.post("/statsiun/",  createStatsiun);
router.patch("/statsiun/",  updateAlat);
router.delete("/statsiun/",  deleteAlat);



// router untuk memanggil data statsiun sesuai dengan username
router.get("/statsiun/:stat",  getUsersByStatsiun);
// router untuk memanggil data statsiun sesuai dengan tanggal rangge
router.get("/laporan/:start/:end",  getStatsiunBydate);


router.get("/:id",  getUserByUserId);
router.post("/login", login);
router.patch("/",  updateUsers);
router.delete("/",  deleteUser);

module.exports = router;
