const express = require("express")
const router = express.Router();

import {chat_controller} from "../controllers/chatcontroller";
import {save_msg_controller} from "../controllers/savemsgcontroller";

router.post("/",chat_controller);
router.post("/save_msg",save_msg_controller);

module.exports = router;
