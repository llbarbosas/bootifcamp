const server = require('../server.js');
module.exports = (sequelize,Sequelize) => {
    const Topic = sequelize.define('topic', {
    });
    Subject.sync();
    return Topic;
}
/*         
Campos da tabela topic que devem ser adicionados:
    ID BIGSERIAL NOT NULL,
    NAME VARCHAR(255)  NOT NULL,
    CONTEUDO TEXT,
    ID_SUBJECT BIGINT NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (ID_SUBJECT) REFERENCES SUBJECT(ID)
*/