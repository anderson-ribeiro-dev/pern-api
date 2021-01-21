const conn = require('../database/dbConfig')


class UsuarioModel {
    
    async usuario(email){
        return await conn('usuario')
            .select('*')
            .where("email", email)   
            .then(res => res)
            .catch(err => err)
           
    }

    async cadastrarUsuario(data){
        return await conn('usuario')
            .insert(data)
            .returning("*")  
            .then(res => res)
            .catch(err => err) 
    }
}


module.exports = new UsuarioModel()