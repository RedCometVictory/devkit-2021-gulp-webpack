const { check, validationResult } = require('express-validator');

// authRoutes
// authenticate users already in db (login) an get token (used to make req to provate routes)
exports.signinAuthValidator = [
  check('email', 'Please include a valid email address.').isEmail(),
  check('password', 'Password is required.').exists()
];

// postRoutes
// create a post
exports.createPostValidator = [
  check('text', 'Text is required.').not().isEmpty()
];

// profileRoutes
// create / edit user profile - list all required fields
exports.createEditProfileValidator = [
  check('status', 'Status is required.').not().isEmpty(),
  check('skills', 'Skills is required.').not().isEmpty()
];

// create profile experience, list all required form fields
exports.createProfileExperienceValidator = [
  check("title", "Title is required.").not().isEmpty(),
  check("company", "Company is required.").not().isEmpty(),
  check("from", "From date is required.")
    .not()
    .isEmpty()
    .custom((value, { req }) => (req.body.to ? value < req.body.to : true))
];

// 
exports.createProfileEducationValidator = [
  check("school", "School is required.").not().isEmpty(),
  check("degree", "Degree is required.").not().isEmpty(),
  check("fieldofstudy", "Field of study is required.").not().isEmpty(),
  check("from", "From date is required. Date must be from the past.")
    .not()
    .isEmpty()
    // .custom((value, { req }) => (req.body.to ? value < req.body.to : true))
];

// userRoutes
// Register User - produce errs for err.array
exports.registerUserValidator = [
  check('name', 'Name is required.').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password must be at least 6 or more characters long.').isLength({min: 6})
];

// validation Result - may need async
exports.validatorResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // if there are errors - execute bad request
    return res.status(400).json({
      errors: errors.array()
    });
  }
  next();
}

// exports.signupValidator = [
//   check('username').not().isEmpty().trim().withMessage('All fields required'),
//   check('email').isEmail().normalizeEmail().withMessage('Invalid email'),
//   check('password')
//     .isLength({ min: 6 })
//     .withMessage('Password must be at least 6 characters long'),
// ];

// exports.signinValidator = [
//   check('email').isEmail().normalizeEmail().withMessage('Invalid email'),
//   check('password')
//     .isLength({ min: 6 })
//     .withMessage('Password must be at least 6 characters long'),
// ];

// exports.validatorResult = (req, res, next) => {
//   const result = validationResult(req);
//   const hasErrors = !result.isEmpty();

//   if (hasErrors) {
//     const firstError = result.array()[0].msg;
//     return res.status(400).json({
//       errorMessage: firstError,
//     });

//     // console.log('hasErrors: ', hasErrors);
//     // console.log('result: ', result);
//   }

//   next();
// };
