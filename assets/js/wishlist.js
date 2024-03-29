"use strict";


//scroll-menu
window.addEventListener("scroll", function () {
    var header = document.querySelector(".header-sticky");
    if (window.scrollY > 0) {
        header.classList.add("visible");
    } else {
        header.classList.remove("visible");
    }
});

//whishlist
let wishlist = [];

if (JSON.parse(localStorage.getItem("wishlist")) === null) {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
} else {
    wishlist = JSON.parse(localStorage.getItem("wishlist"));
}

function checkWishlistForShowDatas(wishlist) {
    let fullWishlist = document.querySelector(".product-tables");
    let emptyWishlist = document.querySelector(".empty-table");
    if (wishlist.length == 0) {
        fullWishlist.classList.add("d-none");
        emptyWishlist.classList.remove("d-none");

    } else {
        fullWishlist.classList.remove("d-none");
        emptyWishlist.classList.add("d-none");
    }
}
checkWishlistForShowDatas(wishlist);

function updateWishlistCount() {
    let wishlistCount = wishlist.length;
    document.querySelectorAll(".count-wish span").forEach(span => {
        span.innerText = wishlistCount;
    });
}

function getWishlistDatas() {
    let tableBody = document.querySelector("tbody");
    let datas = "";
    wishlist.forEach(product => {
        datas += `<tr>
        <td class="cart-image"> <img src="${product.image}" alt=""></td>
        <td class="title"><p>${product.name}</p></td>
        <td >${product.price} $</td>
        <td class="quantity"><button class="add-to-cart" data-id=${product.id}>Add to Cart</button></td>
        <td><i class="fa-solid fa-xmark delete-icon" data-id=${product.id}></i><span>Remove</span></td>
        
        </tr>`;
    });
    tableBody.innerHTML = datas;
}
getWishlistDatas();

let deleteIcons = document.querySelectorAll(".delete-icon");
deleteIcons.forEach(icon => {
    icon.addEventListener("click", function () {
        wishlist = wishlist.filter(m => m.id != parseInt(this.getAttribute("data-id")));
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        this.parentNode.parentNode.remove();
        checkWishlistForShowDatas(wishlist);
        updateWishlistCount();
    })
});

updateWishlistCount();
