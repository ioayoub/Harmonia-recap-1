const AbstractRepository = require("./AbstractRepository")

class ArticleRepository extends AbstractRepository {
  constructor() {
    super({table: "article"});
  }

  async readAll() {

    const [articles] = await this.database.query(`SELECT title, price, image
                                                  FROM ${this.table}`)

    return articles
  }

  async create(article) {

    const {title, price, image} = article;

    const [result] = await this.database.query(`INSERT INTO ${this.table} (title, price, image)
                                                VALUES (?, ?, ?)`,
      [title, price, image])

    return result.insertId;

  }

}

module.exports = ArticleRepository;