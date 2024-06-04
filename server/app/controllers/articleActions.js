const {tables} = require("../../tests/config");

const browse = async (req, res) => {
  try {
    const articles = await tables.article.readAll();

    res.json(articles)

  } catch (e) {

    console.error(e)

  }
}

const add = async (req, res) => {

  const { title, price, image} = req.body;

  try {

    const insertId = await tables.article.create({title, price, image});

    res.json({
      message: `L'article ${insertId} a bien été créé`
    })


  }catch(e) {
    console.error(e)
  }


}

module.exports = {browse, add}