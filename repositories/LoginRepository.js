const db = require('../models/ConnectDatabase')

class LoginRepository{
    async findAll(){
        const rows = await db.query(
            `SELECT * FROM cadastros;`
        )
        return rows
    }

   async findById(id){
        const [row] = await db.query(
            `SELECT * FROM cadastros
            WHERE cadastros.id = ?;
            `,
            [id]
        )
        return row
    }

    async findByUsuario(usuario) {
    const [rows] = await db.query(
        `SELECT * FROM cadastros
        WHERE usuario = ?;
        `,
        [usuario]);
    }

    async create({usuario,email,senha}) {
        const result = await db.query(
          `
          INSERT INTO cadastros (usuario, email, senha)
          VALUES (?, ?, ?)
          `,
          [usuario, email, senha]
        );
    
        // Retorna o ID do novo contato inserido e os dados inseridos
        const insertedId = result.insertId;
        return {
        id: insertedId,
       usuario,
       email,
       senha,
    };
    }

    update(){

    }

    delete(){

    }
}
module.exports = new LoginRepository();