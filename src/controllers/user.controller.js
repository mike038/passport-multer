const { getJSON, saveJSON } = require("../utils/fileHelpers");
const User = require("../models/User");

const userController = {
  saveProfilePicture: function (url, userId) {
    const users = getJSON();
    const currentUser = User.find(userId);
    currentUser.imageUrl = url;
    const index = users.findIndex(({ id }) => id === userId);
    users[index] = { ...users[index], ...currentUser };
    saveJSON(users);
  },
  getProfilePicture: function (userId) {
    const users = getJSON();
    return users[users.findIndex(({ id }) => id === userId)];
  },
};

module.exports = userController;
