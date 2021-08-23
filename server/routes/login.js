const express = require("express")
const router = express.Router();

import {login_controller} from "../controllers/logincontroller";


router.post("/",login_controller);


module.exports = router;
