const AbstractSeeder = require("./AbstractSeeder")
const {faker} = require("@faker-js/faker");

class ArticleSeeder extends AbstractSeeder {
  constructor() {
    super({table: "article", truncate: true});
  }


  run() {
    for(let i=0; i < 50; i += 1) {

      const newArticle = {
        title: faker.commerce.productName(),
        price: faker.commerce.price({min: 3, max: 99}),
        image: faker.image.url()
      }

      this.insert(newArticle)
    }
  }
}

module.exports = ArticleSeeder;