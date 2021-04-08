const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let JeansDetails = new Schema(
  {
    jeansName: {
      type: String,
      required: true,
    },
    
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
  },
  { timestamps: true }
);

module.exports = Jeans = mongoose.model("Jeans", JeansDetails);
