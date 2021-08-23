const express = require("express");
const router = express.Router();

import {update_controller} from "../controllers/updateusercontroller";


router.post("/",update_controller);

module.exports = router;
