const { getJSON, saveJSON } = require("../utils/fileHelpers");

const userController = {
  saveProfilePicture: function (url) {
    const data = getJSON();
    data.profilePicture = url;
    saveJSON(data);
  },
  getProfilePicture: function () {
    const data = getJSON();
    return data.profilePicture || "";
  },
};

module.exports = userController;