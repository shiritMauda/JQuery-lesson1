// Calc the price of product with discount. Add days for the Discount
// Print the result to the result span
// DO NOT TOUCH THE HTML!!!!!!



document.getElementsByTagName('button')[0]
.addEventListener("click",calc)

function calc(){
 let product= getObject();
 let finalPrice=getPriceAfterDiscount(product.price,product.discount);

 document.getElementById('result').innerText=finalPrice;
}

function getPriceAfterDiscount(p,d){
    return p*((100-d)/100)
}

function getObject(){
    var price = document.getElementById('price').Value;
    var discount = document.getElementById('discount').value;
    var days = document.getElementById('days').value;

    return {price,discount,days}
}

