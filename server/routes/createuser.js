const express = require("express");
const router = express.Router();

import {create_controller} from "../controllers/createusercontroller";


router.post("/",create_controller);

module.exports = router;
