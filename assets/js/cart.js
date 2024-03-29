"use strict";

//scroll-menu
window.addEventListener("scroll", function() {
    var header = document.querySelector(".header-sticky");
    if (window.scrollY > 0) {
        header.classList.add("visible");
    } else {
        header.classList.remove("visible");
    }
});

//basket
let basket = [];

if (JSON.parse(localStorage.getItem("basket")) === null) {
    localStorage.setItem("basket", JSON.stringify(basket));
} else {
    basket = JSON.parse(localStorage.getItem("basket"));
}

function checkCartForShowDatas(basket) {
    let fullBasket = document.querySelector(".product-tables");
    let emptyBasket = document.querySelector(".empty-table");
    if (basket.length == 0) {
        fullBasket.classList.add("d-none");
        emptyBasket.classList.remove("d-none");

    } else {
        fullBasket.classList.remove("d-none");
        emptyBasket.classList.add("d-none");
    }
}
checkCartForShowDatas(basket);
function updateBasketCount() {
    let basketCount = basket.reduce((total, item) => total + item.count, 0);
    document.querySelectorAll(".count-basket span").forEach(span => {
        span.innerText = basketCount;
    });
}

function getBasketDatas() {
    let tableBody = document.querySelector("tbody");
    let datas = "";
    basket.forEach(product => {
        datas += `<tr>
        <td class="cart-image"> <img src="${product.image}" alt=""></td>
        <td class="title"><p>${product.name}</p></td>
        <td >${product.price * product.count} $</td>
        <td class="quantity"><span class="minus" data-id=${product.id}><i class="fa-solid fa-minus"></i></span> <input type="text" placeholder="${product.count}"><span class="plus" data-id=${product.id}><i class="fa-solid fa-plus"></i></span></td>
        <td>${product.price} ₼</td>
        <td><i class="fa-solid fa-xmark delete-icon" data-id=${product.id}></i><span>Remove</span></td>
        
        </tr>`;
    });
    tableBody.innerHTML = datas;
}
getBasketDatas();

let deleteIcons = document.querySelectorAll(".delete-icon");
console.log(deleteIcons);
deleteIcons.forEach(icon => {
    icon.addEventListener("click", function () {
        basket = basket.filter(m => m.id != parseInt(this.getAttribute("data-id")));
        localStorage.setItem("basket", JSON.stringify(basket));
        this.parentNode.parentNode.remove();       
        // getGrandTotal(basket);
         checkCartForShowDatas(basket);
        updateBasketCount();
    })
});

updateBasketCount();






