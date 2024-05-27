const { unlink } = require("node:fs/promises");
const asyncHandler = require("express-async-handler");
// const { body, validationResult } = require("express-validator");
const path = require('path');

const Admin = require("../models/admin");

const { checkAdmin } = require("./../utils/auth");
const { checkUploadFile } = require("./../utils/file");

exports.uploadProfile = asyncHandler(async (req, res, next) => {
  // const id = req.params.id;
  const id = req.adminId;
  const image = req.file;
  // console.log("Multiple Images array", req.files);  // For multiple files uploaded

  const admin = await Admin.findById(id);
  checkAdmin(admin);
  checkUploadFile(image);
  const imageUrl = image.path.replace("\\", "/");

  if (admin.profile) {
    // await unlink(admin.profile); // Delete an old profile image because it accepts just one.
    await unlink(path.join(__dirname, '..', admin.profile));
  }

  admin.profile = imageUrl;
  await admin.save();

  res
    .status(200)
    .json({ message: "Successfully uploaded the image.", profile: imageUrl });
});

exports.index = async (req, res, next) => {
  //   const admins = await Admin.find().exec();
  //   res.json({
  //     createdTime: admins[13].createdAt,
  //     MomentTime: moment(admins[13].createdAt).tz("Asia/Yangon").format(),
  //     admins: admins,
  //  });
  res.json({ success: true });
};

exports.store = asyncHandler(async (req, res, next) => {
  // const admin = new Admin({
  //   name: req.body.name,
  //   phone: req.body.phone,
  //   email: req.body.email,
  //   password: req.body.password,
  //   role: req.body.role,
  //   lastLogin: req.body.lastLogin,
  // });
  // await admin.save();
  // res.status(201).json({
  //   message: "Successfully created an admin.",
  //   admin: admin,
  // });
  res.json({ success: true });
});

exports.show = (req, res, next) => {
  res.json({ success: true });
};

exports.update = (req, res, next) => {
  res.json({ success: true });
};

exports.destroy = (req, res, next) => {
  res.json({ success: true });
};

// const admin = new Admin({name: "Mg Mg",email ...});
// await admin.save();

