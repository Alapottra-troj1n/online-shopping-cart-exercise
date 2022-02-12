const cartContainer = document.querySelector(".cart");

function updateCount(isPlus, productId) {
  const productCount = document.querySelector(productId + "-count");
  productCountValue = parseInt(productCount.value);

  if (isPlus == true) {
    productCountValue++;
  } else if (isPlus == false) {
    productCountValue--;
  }
  productCount.value = productCountValue;
}





cartContainer.addEventListener("click", function (e) {
  const caseProduct = ".case-product";
  if (e.target.classList.contains("case-plus-btn")) {
    updateCount(true, caseProduct);
   
  } else if (e.target.classList.contains("case-minus-btn")) {
    updateCount(false, caseProduct);
    const productCount = document.querySelector('.case-product-count');
    if(productCount.value == 0) {

        productCount.value = 1;

    }
  }
});
