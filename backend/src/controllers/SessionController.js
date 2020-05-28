const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { name } = request.body;

        const user = await connection('users')
        .where('name', name)
        .select('name')
        .first();

        if (!user) {
            return response.status(400).json({ error: 'No user found with this name'})
        }

        return response.json(`Welcome!`);
    }
}