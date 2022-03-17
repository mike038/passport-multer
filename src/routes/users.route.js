const express = require("express");
const router = express.Router();
const passport = require("passport");

const userController = require("../controllers/user.controller");
const { uploadLocal } = require("../utils/multer");

router.get("/profile", (req, res) => {
  res.redirect("/public/html/profile.html");
});

router.post(
  "/profilePicture",
  uploadLocal.single("profilePicture"),
  (req, res) => {
    const path = `${req.file.destination}/${req.file.filename}`.replace(
      "src/",
      ""
    );
    userController.saveProfilePicture(`http://localhost:3000/${path}`, req.user.id);
    res.redirect("/public/html/profile.html");
  }
);

router.get("/getProfilePicture", (req, res) => {
  res.send({ url: userController.getProfilePicture() });
});

module.exports = router;
