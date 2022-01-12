const { User } = require("../../../model/model");

module.exports = async function (parent, args, context, info) {
  await User.findByIdAndUpdate(args._id, args, { new: true }).save();
  return user;
};
