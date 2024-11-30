const LoginRepository = require('../repositories/LoginRepository')

class LoginController{
    async index(request, response){
        const logins = await LoginRepository.findAll()
        response.json(logins) 
    }

   async show(request, response){
        const {id} = request.params

        const login = await LoginRepository.findById(id)
        if(!login){
            return response.status(404).json({error: "Login not found!"})
        }
        response.status(200).json(login)
    }

    async store(request, response) {
        const { usuario, email, senha} = request.body;
        // Definindo regra de que nome é obrigatório
        if (!usuario) {
          return response.status(400).json({ error: "Nome é obrigatório" });
        }
        if (!email) {
            return response.status(400).json({error: "Email é obrigatório" });
        }
        if (!senha) {
            return response.status(400).json({error: "Senha é obrigatória"})
        }

        if (usuario) {
            const contactByUsuario = await ContactRepository.findByUsuario(usuario);
            if (contactByUsuario) {
              return response
                .status(400)
                .json({ error: "O usuário já está em uso" });
            }
        }

        const contact = await LoginRepository.create({
            usuario,
            email,
            senha,
        });

        response.status(201).json(contact);
    }

    update(){
        //ATUALIZAR UM CONTATO
    }

    delete(){
        //DELETAR UM CONTATO
    }

}

module.exports = new LoginController();