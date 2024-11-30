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
            `SELECT contacts.*, categories.name AS category_name
            FROM contacts
            LEFT JOIN categories ON categories.id = contacts.category_id
            WHERE contacts.id = ?;
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

    async create(){
        const [row] = await db.query(
            `INSERT INTO login (usuario, email, senha)`
        )
    }

    update(){

    }

    delete(){

    }
}
module.exports = new LoginRepository();