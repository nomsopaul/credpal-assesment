const { transferMoney, getTransactions } = require('../controllers/TransactionController');
const transRouter = require("express").Router();
const { verifyLogin, verifyUser } = require('../middlewares/authentication');

transRouter.post("/transfer/:userId",  verifyLogin, verifyUser, transferMoney);
transRouter.get("/history/:userId",  verifyLogin, verifyUser, getTransactions);

module.exports = transRouter;