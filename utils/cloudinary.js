require("dotenv").config();

const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.volunteerNetwork,
  api_key: process.env.tareqWeb,
  api_secret: process.env.aodzJcW4NB85Ew2Y,
});

module.exports = { cloudinary };
