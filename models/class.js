const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let classDetails = new Schema(
  {
    className: {
      type: String,
      required: true,
    },

    section: [
      {
        sectionName: {
          type: String,
        }
      }
    ],
    
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
  },
  { timestamps: true }
);

module.exports = Class = mongoose.model("Class", classDetails);
