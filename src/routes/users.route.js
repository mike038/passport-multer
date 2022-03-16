const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const { uploadLocal } = require("../utils/multer");

router.post(
  "/profilePicture",
  uploadLocal.single("profilePicture"),
  (req, res) => {
    const path = req.file.path.replace("src/", "");
    userController.saveProfilePicture(`http://localhost:3000/${path}`);
    res.redirect("/public/html/profile.html");
  }
);

router.get("/getProfilePicture", (req, res) => {
  res.send({ url: userController.getProfilePicture() });
});

module.exports = router;