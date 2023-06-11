const db = require("../config/db");
const getPosts = async (req, res) => {
  const { rows } = await db.pool.query("SELECT * FROM posts");
  res.status(200).json({
    rows,
  });
};

const createPost = async (req, res) => {
  console.log("req.body", req.body);
  try {
    const { titulo, img, descripcion } = req.body;
    const { rows } = await db.pool.query(
      `INSERT INTO posts (titulo, img, descripcion) VALUES ('${titulo}', '${img}', '${descripcion}') RETURNING *`
    );
    res.status(200).json({
      status: "success",
      data: rows,
      message: "Hola mundo desde el servidor de NodeJS",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      data: error,
    });
  }
};

module.exports = { createPost, getPosts };
