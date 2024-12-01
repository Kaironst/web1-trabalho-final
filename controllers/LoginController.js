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
        
        //verificação se não foi deixado nada como null
        if (!usuario) {
          return response.status(400).json({ error: "Nome é obrigatório" });
        }
        if (!email) {
            return response.status(400).json({error: "Email é obrigatório" });
        }
        if (!senha) {
            return response.status(400).json({error: "Senha é obrigatória"})
        }
   
        // verificação se o usuário já existe
        if (usuario) {
            const loginByUsuario = await LoginRepository.findByUsuario(usuario);
            if (loginByUsuario) {
              return response.status(400).json({ error: "O usuário já está em uso" });
            }
        }

        //cria o novo cadastro)
        const login = await LoginRepository.create({usuario,email,senha,});

        response.status(201).json(login);
    }

    //atualiza o cadastro
    async update(request,response){
        const {id} = request.params
        const {usuario, email, senha} = request.body;
        
        //verificação se não foi deixado nada como null
        if (!usuario) {
          return response.status(400).json({ error: "Nome é obrigatório" });
        }
        if (!email) {
            return response.status(400).json({error: "Email é obrigatório" });
        }
        if (!senha) {
            return response.status(400).json({error: "Senha é obrigatória"})
        }

        //verifica se há um cadastro no id
        const cadastro = await LoginRepository.findById;
        if (!cadastro){
            return response.status(404).json({error: "O usuário não existe"});
        }

        //verifica se o usuário já está em uso
        if (usuario && usuario != cadastro.email) {
            const loginByUsuario = await LoginRepository.findByUsuario(usuario);
            if (loginByUsuario) {
              return response.status(400).json({ error: "O usuário já está em uso" });
            }
        }

        //aplica as mudanças
        const updatedlogin = await LoginRepository.update(id, {usuario, email, senha});

        response.status(200).json(updatedlogin)
    }

    //deleta o cadastro
    async delete(request,response){
        const {id} = request.params

        //verifica se há um cadastro no id
        if (!id) {
      return response.status(400).json({ error: "Invalid contact id" });
        }

        //deleta o conteudo do id
        await LoginRepository.delete(id);

        response.sendStatus(204);
    }

}

module.exports = new LoginController();