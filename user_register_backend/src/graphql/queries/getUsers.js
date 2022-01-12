const { User } = require("../../model/model");

module.exports = async function (parent, args, context, info) {
  const [user] = await User.find(args);
  return [user];
};
