const Sequelize = require("sequelize");
require("dotenv").config();


let sequelize;

// if (some.env.variable) {
//  sequelize = new Sequelize(
//     "mysql://doubxdcgs23kzlta:yrbf91if3s49bzjt@acw2033ndw0at1t7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ta0zjoyuvkbtqo4a"
//   );
// } else {

  if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
      }
    );
  }
// }

module.exports = sequelize;
