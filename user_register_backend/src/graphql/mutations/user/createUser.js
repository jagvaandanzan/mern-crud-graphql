const { User } = require("../../../model/model");

module.exports = async function (parent, args, context, info) {
  const user = await User(args).save();
  return user;
};
