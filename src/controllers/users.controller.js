import db from '../db/index.js'

export class UserController{
    async createUser(req, res){
        try {
            const {name, email} = req.body;
            const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);
            if(user.rows[0]){
                return res.status(409).json({
                    message: 'User with this email already exists'
                })
            }
            const result = await db.query(
                'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
                [name, email]
            );
            return res.status(201).json({
                statusCode: 201,
                message: 'success',
                data: result?.rows[0]
            })
        } catch (error) {
            return res.status(500).json({
                message:error.message
            })
        }
    }

    async getUser(req, res){
        try {
            res.render('index')
        } catch (error) {
            return res.status(500).json({
                message:error.message
            })
        }
    }
}