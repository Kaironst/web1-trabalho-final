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

    store(){
        //CADASTRAR UM CONTATO
    }

    update(){
        //ATUALIZAR UM CONTATO
    }

    delete(){
        //DELETAR UM CONTATO
    }

}

module.exports = new LoginController();