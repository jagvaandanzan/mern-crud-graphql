const { User } = require("../../model/model");

module.exports = async function (parent, args, context, info) {
  const user = await User.findById(args._id);
  console.log(user);
  return user;
};
