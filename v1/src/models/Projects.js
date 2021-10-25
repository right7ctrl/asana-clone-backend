const Mongoose = require("mongoose");

const ProjectScheme = new Mongoose.Schema(
  {
    name: String,
    /* user_id: {
        type: Mongoose.Types.ObjectId,
        ref: "user"
    } */
  },
  { timestamps: true, versionKey: false }
);

module.exports = Mongoose.model("project", ProjectScheme);
