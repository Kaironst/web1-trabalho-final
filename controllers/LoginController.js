const LoginRepository = require('../repositories/LoginRepository')

//lista todos os logins válidos na pagina
class LoginController{
    async index(request, response){
        const logins = await LoginRepository.findAll()
        response.json(logins) 
    }

    //lista um login específico pelo seu id (acho q vou alterar isso para mostrar por email ou por usuário (ou só adicionar um novo que faça isso))
   async show(request, response){
        const {id} = request.params

        const login = await LoginRepository.findById(id)
        if(!login){
            return response.status(404).json({error: "Login not found!"})
        }
        response.status(200).json(login)
    }

    //realiza um cadastro novo
    async store(request, response) {
        const { usuario, email, senha} = request.body;
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
            const loginByUsuario = await LoginRepository.findByUsuario(usuario);
            if (loginByUsuario) {
              return response.status(400).json({ error: "O usuário já está em uso" });
            }
        }

        const login = await LoginRepository.create({
            usuario,
            email,
            senha,
        });

        response.status(201).json(login);
    }

    //atualiza o cadastro
    update(){
        //ATUALIZAR UM CONTATO
    }

    //deleta o cadastro
    delete(){
        //DELETAR UM CONTATO
    }

}

module.exports = new LoginController();