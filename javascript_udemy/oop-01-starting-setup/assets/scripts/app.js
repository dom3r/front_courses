class Product {
  title = "DEFAULT";
  imageURL;
  description;
  price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageURL = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
    items=[];

    set cartItems(value){
        this.items=value;
        this.totalOutput.innerHTML = `<h2>Total\$${this.totalAmount.toFixed(2)}</h2>`;
    }

    get totalAmount(){
        const sum = this.items.reduce((prevValue, curItem)=>{
            return prevValue + curItem.price;
        },0);
        return sum;
    }

    addProduct(product){
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
       
    }

    render(){
        const cartEl=document.createElement('section');
        cartEl.innerHTML=`<h2>Total\$${0}</h2>
        <button>Order Now!</button>
        `;
        cartEl.className='cart';
        this.totalOutput = cartEl.querySelector("h2");
        return cartEl;
    }
}

class ProductItem{
    constructor(product){
        this.product = product;
    }

    addToCart(){
        // console.log('Adding product to cart...');
        // console.log(this.product);
        App.addProductToCart(this.product);
    }
    render(){
        const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
            <div>
            <img src="${this.product.imageURL}" alt="${this.product.title}">
            <div class ="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
            </div>
            </div>
            `;
            const addCartButton = prodEl.querySelector('button');
            addCartButton.addEventListener('click', this.addToCart.bind(this))
            return prodEl;
    }
}

class ProductList{
    products = [
        new Product(
            "A pillow",
            "https://www.ikea.com/ph/en/images/products/rumsmalva-ergonomic-pillow-side-back-sleeper__0792315_pe764703_s5.jpg?f=xl",
            "A soft pillow",
            19.99
          ), 
          new Product(
            "A carpet",
            "https://www.ikea.com/ph/en/images/products/rumsmalva-ergonomic-pillow-side-back-sleeper__0792315_pe764703_s5.jpg?f=xl",
            "A soft carpet",
            80.5
          )
    ];
    constructor(){}

    render(){
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
    }
}

class Shop{
    render(){
        const renderHook = document.getElementById("app");

        this.cart = new ShoppingCart();
        const cartEl = this.cart.render();
        const productList = new ProductList;
        const prodListEl = productList.render();

        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}

class App{
    static cart;

    static init(){
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
    }

    static addProductToCart(product){
        this.cart.addProduct(product);
    }
}

App.init();

// const shop = new Shop();
// shop.render();



// EXAMPLE WITHOUT CLASSES ProductList (ARRAY OBJECTS)
// const productList = {
//   products: [
//     new Product(
//       "A pillow",
//       "https://www.ikea.com/ph/en/images/products/rumsmalva-ergonomic-pillow-side-back-sleeper__0792315_pe764703_s5.jpg?f=xl",
//       "A soft pillow",
//       19.99
//     ),
//     // {
//     //   title: "A pillow",
//     //   imageURL:
//     //     "https://www.ikea.com/ph/en/images/products/rumsmalva-ergonomic-pillow-side-back-sleeper__0792315_pe764703_s5.jpg?f=xl",
//     //   price: 19.99,
//     //   description: "A soft pillow",
//     // },
//     new Product(
//       "A carpet",
//       "https://www.ikea.com/ph/en/images/products/rumsmalva-ergonomic-pillow-side-back-sleeper__0792315_pe764703_s5.jpg?f=xl",
//       "A soft carpet",
//       80.5
//     )
//     // {
//     //   title: "A carpet",
//     //   imageURL:
//     //     "https://www.ikea.com/ph/en/images/products/rumsmalva-ergonomic-pillow-side-back-sleeper__0792315_pe764703_s5.jpg?f=xl",
//     //   price: 80.5,
//     //   description: "A soft carpet",
//     // },
//   ],
//   render() {
//     const renderHook = document.getElementById("app");
//     const prodList = document.createElement("ul");
//     prodList.className = "product-list";
//     for (const prod of this.products) {
//       const prodEl = document.createElement("li");
//       prodEl.className = "product-item";
//       prodEl.innerHTML = `
//             <div>
//             <img src="${prod.imageURL}" alt="${prod.title}">
//             <div class ="product-item__content">
//             <h2>${prod.title}</h2>
//             <h3>\$${prod.price}</h3>
//             <p>${prod.description}</p>
//             <button>Add to Cart</button>
//             </div>
//             </div>
//             `;
//       prodList.append(prodEl);
//     }
//     renderHook.append(prodList);
//   },
// };
//productList.render();
