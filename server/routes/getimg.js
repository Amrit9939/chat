const express = require("express")
const router = express.Router();

import {get_img_controller} from "../controllers/getimgcontroller";


router.get("/:key",get_img_controller);

module.exports = router;
