module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('movie', {
        title: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.TEXT,
        },
        imageurl: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.INTEGER,
        },
    })
    return User;
}
