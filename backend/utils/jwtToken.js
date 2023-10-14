// create token and saving that in cookies
const sendToken = (user, statusCode, res) => {
    const token = user.getJwtToken();
  
    // Options for cookies
    // const options = {
    //   expires: new Date(Date.now() + process.env.JWT_EXPIRES),
    //   httpOnly: true,
    //   sameSite: "none",
    //   secure: true,
    // };

    // const options = {
    //   expires: new Date(Date.now() + Number(process.env.JWT_EXPIRES)), // Make sure process.env.JWT_EXPIRES is correctly set as a number in milliseconds.
    //   httpOnly: true,
    //   sameSite: "none",
    //   secure: true, // Ensure your application is using HTTPS.
    // };

    const options = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day in milliseconds
      httpOnly: true,
      sameSite: "none",
      secure: true,
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
  };
  
  module.exports = sendToken;
// dotenv.config()
// const jwt = require('jsonwebtoken');

// const sendToken = (user, statusCode, res) => {
//   // Your secret key for signing the JWT
//   const secretKey = process.env.JWT_SECRET_KEY; // Replace with your actual secret key

//   // Create a JWT token
//   const token = jwt.sign({ userId: user.id }, secretKey, {
//     expiresIn: '90d', // Token expiration time (90 days in this example)
//   });

//   // Options for cookies
//   const options = {
//     expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
//     httpOnly: true,
//     sameSite: 'none',
//     secure: true,
//   };

//   res.status(statusCode).cookie('token', token, options).json({
//     success: true,
//     user,
//     token,
//   });
// };

// module.exports = sendToken;
