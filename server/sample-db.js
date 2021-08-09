const Product = require('./model/product')

class FakeDb {
    constructor() {
        this.products = [
          {
            coverImage: "src/assets/img/pngtree-gray-network-placeholder-png-image_3416659.jpg",
            name: 'Phone XL',
            price: '799',
            description: 'A large phone with one of the best screens',
            heding1: 'サンプルテキスト１',
            heding2: 'サンプルテキスト２',
            heding3: 'サンプルテキスト３',
            headingtext1: 'サンプルテキスト　サンプルテキスト',
            headingtext2: 'テキスト文章　テキスト文章',
            headingtext3: 'Duis mllis, est non commodo luctus',
          },
          {
            coverImage: "src/assets/img/pngtree-gray-network-placeholder-png-image_3416659.jpg",
            name: 'Phone Mini',
            price: '699',
            description: 'A great phone with one of the best cameras',
            heding1: 'サンプルテキスト１',
            heding2: 'サンプルテキスト２',
            heding3: 'サンプルテキスト３',
            headingtext1: 'サンプルテキスト　サンプルテキスト',
            headingtext2: 'テキスト文章　テキスト文章',
            headingtext3: 'Duis mllis, est non commodo luctus',
          },
          {
            coverImage: "src/assets/img/pngtree-gray-network-placeholder-png-image_3416659.jpg",
            name: 'Phone Standard',
            price: '299',
            description: '',
            heding1: 'サンプルテキスト１',
            heding2: 'サンプルテキスト２',
            heding3: 'サンプルテキスト３',
            headingtext1: 'サンプルテキスト　サンプルテキスト',
            headingtext2: 'テキスト文章　テキスト文章',
            headingtext3: 'Duis mllis, est non commodo luctus',
          }
        ]
    }

    async initDb() {
      await this.cleanDb()
      this.pushProductsToDb()
    }

    async cleanDb() {
        await Product.deleteMany({})
    }


    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb() {
        this.pushProductsToDb()
    }
}

module.exports = FakeDb
