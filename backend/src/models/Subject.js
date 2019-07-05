module.exports = (sequelize, Sequelize) => {
    const Subject = sequelize.define('subject', {
        name: { 
            type: Sequelize.STRING, 
            allowNull: false, 
            unique: true,
            validate: { 
                notNull: { msg: "O campo nome não pode ser nulo." },
                notEmpty: { msg: "O campo nome não pode ser vazio." }
            }
        }
    });
    Subject.sync();
    return Subject;
}