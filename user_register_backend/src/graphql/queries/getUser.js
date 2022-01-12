const { User } = require("../../model/model");

module.exports = async function (parent, args, context, info) {
  const user = await User.find(args).save();
  return user[0];
};
