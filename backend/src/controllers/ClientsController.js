const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const clients = await connection('clients').select('*');

        return response.json(clients);
    },

    async create(request, response) {
        const { empresa, comprador, telefone, email, whats, cnpj } = request.body;

        const [name] = await connection('clients').insert({
            empresa,
            comprador,
            telefone,
            email,
            whats,
            cnpj,
        });

        return response.json(`Cliente Cadastrado Com Sucesso!`)
    }
};