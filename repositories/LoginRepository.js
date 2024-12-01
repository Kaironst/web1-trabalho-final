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
        
        return  rows; //a checagem do usuário não tava acontecendo pq agnt esqueceu do return...
    }

    async create({usuario,email,senha}) {
        const result = await db.query(
          `
          INSERT INTO cadastros (usuario, email, senha)
          VALUES (?, ?, ?)
          `,
          [usuario, email, senha]
        );
    
        
        const insertedId = result.insertId;
        return {id: insertedId,usuario,email,senha};
    }

    async update(id,{usuario,email,senha}){
        
        await db.query(
        `UPDATE cadastros SET 
        usuario=?, email=?, senha=?
        where id=?;
        `,[usuario, email, senha, id]
        );

        const [newrow] = await db.query(
            `SELECT * FROM cadastros
            WHERE id = ?;
            `,[id]
        );
        return newrow;
    }

    async delete(id){
        const deleted = await db.query(
            `DELETE FROM cadastros
            WHERE id=?;
            `,[id]
        );
        return deleted
    }
}
module.exports = new LoginRepository();