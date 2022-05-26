const { Pool } = require('pg');

const pool = new Pool({
    user: 'angular_blog_user',
    host: 'localhost',
    password: '123579',
    database: 'angular_blog',
    port: '5432'
});

const getPosts = async (req, res) => {
    const response = await pool.query('SELECT * FROM posts ORDER BY postId ASC');
    res.status(200).json(response.rows);
};

const getPostById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM posts WHERE postId = $1', [id]);
    res.json(response.rows);
};

const createPost = async (req, res) => {
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO posts (name, email) VALUES ($1, $2)', [name, email]);
    res.json({
        message: 'Post Added successfully',
        body: {
            user: {name, email}
        }
    })
};

const updatePost = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    const response =await pool.query('UPDATE posts SET name = $1, email = $2 WHERE postId = $3', [
        name,
        email,
        id
    ]);
    res.json('Post Updated Successfully');
};

const deletePost = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM posts where postId = $1', [
        id
    ]);
    res.json(`Post ${id} deleted Successfully`);
};

module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
