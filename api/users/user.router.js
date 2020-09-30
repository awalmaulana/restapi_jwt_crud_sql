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
  deleteUser
} = require("./user.controller");

router.get("/", checkToken, getUsers);
router.post("/", checkToken, createUser);
router.post("/statsiun/add", checkToken, createStatsiun);


// router untuk memanggil data statsiun sesuai dengan username
router.get("/statsiun/:stat", checkToken, getUsersByStatsiun);
// router untuk memanggil data statsiun sesuai dengan tanggal rangge
router.get("/laporan/:start/:end", checkToken, getStatsiunBydate);


router.get("/:id", checkToken, getUserByUserId);
router.post("/login", login);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);

module.exports = router;
