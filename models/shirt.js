const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ShirtsDetails = new Schema(
  {
    schoolName: {
      type: String,
      required: true,
    },
    classes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
  },
  { timestamps: true }
);

module.exports = Shirts = mongoose.model("Shirt", ShirtsDetails);


// const studentObject = new Schema({
//   studentId: {
//     type: mongoose.Types.ObjectId,
//     ref: "Students",
//   },
// });

// const classesObject = new Schema({
//   classId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Class",
//   },
//   students: [studentObject],
// });
