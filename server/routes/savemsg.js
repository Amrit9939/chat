const express = require("express")
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

import {save_msg_controller} from "../controllers/savemsgcontroller";


router.post("/",upload.single('image'),save_msg_controller);

module.exports = router;
