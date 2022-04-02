const { getUserByName, listUsers } = require('../model/User.model');

// module.exports = async function createUserService(user) {
//   bcrypt.genSalt(10, function(_err, salt) {
//     bcrypt.hash(user.password, salt, async function(_err, hash) {
//       const bcryptUser = {
//         ...user,
//         password: hash,
//       };
      
//       const newUser = await createUser(bcryptUser);

//       console.log(newUser);
//       return { code: 201, data: newUser };
//     });
//   });
// };
