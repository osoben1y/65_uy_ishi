import db from "../db/index.js";

export class ArticleController{
    async createAtricle(req, res){
        try {
            const {user_id, content, title} = req.body;
            const result = await db.query(
                'INSERT INTO articles(user_id, content, title) VALUES ($1, $2, $3) RETURNING *',
                [user_id, content, title]
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

    async getArticleByUserId(req, res){
        try {
            const result = await db.query('SELECT * FROM articles WHERE user_id = $1', [req.params.id]);
            if(!result?.rows[0]){
                return res.status(404).json({
                    error: "User not found"
                });
            }
            return res.status(200).json({
                statusCode: 200,
                message: 'success',
                data: result?.rows[0]
            })
        } catch (error) {
            return res.status(500).json({
                message:error.message,
                stack: error.stack
            })
        }
    }

    async getArticleForm(_, res){
        try {
            res.render('article')
        } catch (error) {
            return res.status(500).json({
                message:error.message
            })
        }
    }
}