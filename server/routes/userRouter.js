const express = require("express");
const { signup, signin } = require("../controller/userController");

const { check } = require("express-validator");
const router = express.Router();

router.post(
  "/signup",
  [
    check("name", "Name atleast should be 3 characters").isLength({ min: 3 }),
    check("email", "Email should be valid").isEmail(),
    check("password", "Password at least should be 6 characters").isLength({
      min: 6,
    }),
  ],
  signup
);

// router.get(
//   '/signup',
//   [
//     check('name', 'Name atleast should be 3 characters').isLength({min: 3}),
//     check('lastname', 'LastName atleast should be 10 characters').isLength({
//       min: 10,
//     }),
//     check('phonenumber', 'PhoneNumber should be atleast 10 digits').isLength({
//       min: 10,
//     }),
//     check('address', 'write your address').isLength({min: 10, max: 10}),
//     //check('email', 'Email should be valid').isEmail(),
//     // check('password', 'Password at least should be 6 characters').isLength({
//     //   min: 6,
//     // }),
//   ],
//   signup,
// );

router.post("/signin", signin);
module.exports = router;
