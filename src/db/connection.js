const {Sequelize} = require("sequelize");

const connection = new Sequelize(process.env.MYSQL_URI);

try {
    connection.authenticate();

    console.log("Succesful connection established.");
} catch (error) {
    console.log(error);
}


module.exports = connection