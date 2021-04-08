const Jeans = require("../models/jeans");
const ObjectId = require("mongoose").Types.ObjectId;
const { to, ReE, ReS, isNull, isEmpty } = require("../services/util.service");
const HttpStatus = require("http-status");

module.exports.createJeans = async (req, res) => {
  console.log(req.body);
  let jeansName = req.body.jeansName;

  if (isNull(jeansName)) {
    return ReE(
      res,
      { message: "please enter the School Name" },
      HttpStatus.BAD_REQUEST
    );
  }
  let [err1, existingJeansName] = await to(
    Jeans.findOne({ jeansName: jeansName })
  );

  if (err1) {
    return ReE(res, { message: "Jeans not Here" });
  }

  if (existingJeansName) {
    return ReE(
      res,
      { message: "Jeans already here" },
      HttpStatus.BAD_REQUEST
    );
  }

  let [err2, Products] = await to(
    Jeans.create({
      jeansName: jeansName,
      active: true,
    })
  );

  if (err2) {
    return ReE(res, { message: "Jeans already Exist" });
  }
  return ReS(
    res,
    { message: "Jeans Added Sucessfully", jeans: Products },
    HttpStatus.OK
  );
};

exports.getOne = async (req, res) => {
  let err, existingJeans;

  [err, existingJeans] = await to(
    Jeans.findOne({ _id: req.body.id, active: true })
  );

  if (err) {
    return ReE(res, err, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  if (!existingJeans) {
    ReE(res, { message: "Unhandled Error" }, HttpStatus.BAD_REQUEST);
  }

  return ReS(
    res,
    { message: "employees fetched", jeans: existingJeans },
    HttpStatus.OK
  );
};

module.exports.getAll = async (req,res) => {

  let err, existingJean; 

  [err, existingJean] = await to(Jeans.find({}));
  console.log(err, existingJean);
  return ReS(res, { message: 'Jeans found!', Jeans: existingJean }, HttpStatus.OK);

};
