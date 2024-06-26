const validatePhone = (req, res, next) => {     // This is middleware including req,res,next
  let phone = req.body.phone;
  // let phone = req.body.phone.replace(/\s/g, "");
  if (phone.match("^[0-9]+$") == null) {
    const err = new Error("Invalid phone number. Please enter the correct one.");
    err.status = 400;
    return next(err);
  }
  if (phone.slice(0, 2) == "09") {
    phone = phone.substring(2, phone.length);
  }
  if (phone.length < 5 || phone.length > 12) {
    const err = new Error("Invalid phone number. Please enter the correct one.");
    err.status = 400;
    return next(err);
  }
  req.body.phone = phone;
  next();
};

module.exports = validatePhone;



