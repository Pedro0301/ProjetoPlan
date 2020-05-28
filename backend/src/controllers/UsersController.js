const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const users = await connection('users').select('*');

        return response.json(users);
    },

    async create(request, response) {
        const { name, email, ramal, whats, senha } = request.body;
    
    await connection('users').insert({
        name,
        email,
        ramal,
        whats,
        senha,
    })
    
    return response.json(`Cadastro concluido com sucesso!`);
    }
};