function randomIntBetween(min,max){
    return Math.floor(Math.random() * (max-min +1) + min); // 10.999 flor to 10 
}

console.log(randomIntBetween(2,10)); //between 2 - 10

// tagged templates
function productDescription(strings, productName, productPrice){
    console.log(strings);
    console.log(productName);
    console.log(productPrice);
    let priceCategory = 'cheap';
    if(productPrice>20){
        priceCategory = 'fair';
    }
    return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`
    // return {name: productName, price: prodPrice};

}

const prodName = 'JavaScript course'
const prodPrice = 19.95;

const productOutput = productDescription`This product(${prodName}) is ${prodPrice}.`;

console.log(productOutput);