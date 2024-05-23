const Admin = require("../models/admin");
// const Otp = require("../models/otp");

const asyncHandler = require("express-async-handler");
// const { body, validationResult } = require("express-validator");

const moment = require("moment-timezone");

exports.index = async (req, res, next) => {
  const admins = await Admin.find().exec();
  res.json({ 
    createdTime: admins[13].createdAt,
    MomentTime: moment(admins[13].createdAt).tz("Asia/Yangon").format(),
    admins: admins,
 });
};

exports.store = asyncHandler(async (req, res, next) => {
  const admin = new Admin({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    lastLogin: req.body.lastLogin,
  });
  await admin.save();
  res.status(201).json({
    message: "Successfully created an admin.",
    admin: admin,
  });
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
