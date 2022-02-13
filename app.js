const cartContainer = document.querySelector(".cart");

function updateCount(isPlus, product, productPrice) {
  const productCount = document.querySelector(product + "-product-count");
  productCountValue = parseInt(productCount.value);

  if (isPlus == true) {
    productCountValue++;
  } else if (productCountValue > 0) {
    productCountValue--;
  }
  //this checks if product value is greater than 0 if it is it and user clicked minus which sends false and
  // it goes to else if statement and decrements by 1 and if the value is 0 which is not greater than 0 and user clicked minus which sends a false arguement it doees not passes if statement nor //else statement it goes down and executes other codes 
  productCount.value = productCountValue;


  const productTotalprice = document.querySelector(product+ '-total-price');

  let totalProductPrice = productCountValue * productPrice;

  productTotalprice.innerText = totalProductPrice;

  
}





cartContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("case-plus-btn")) {
    updateCount(true,'.case', 59);
    
   
  } else if (e.target.classList.contains("case-minus-btn")) {

    updateCount(false, '.case', 59);
    
  }
});
