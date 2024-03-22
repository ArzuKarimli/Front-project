
let dropdownMenus = document.querySelectorAll(".dropdown1");


dropdownMenus.forEach(function(dropdownMenu) {
    dropdownMenu.addEventListener("click", function(e) {
        e.preventDefault();
        
     
        let dropdownUp = this.querySelector("[class^='dropdown-up']");

   
        dropdownMenus.forEach(function(menu) {
            let otherDropdownUp = menu.querySelector("[class^='dropdown-up']");
            if (dropdownUp !== otherDropdownUp) {
                otherDropdownUp.classList.add("d-none");
            }
        });

        if (dropdownUp.classList.contains("d-none")) {
            dropdownUp.classList.remove("d-none");
        } else {
            dropdownUp.classList.add("d-none");
        }
    });
});

let selectMenu = document.querySelector(".select-box .select");
let selectDropdown = document.querySelector(".select-dropdown");
let downIcon=document.querySelector(".select-box .select .down-icon")

selectMenu.addEventListener("click", function() {
    if (selectDropdown.classList.contains("d-none")) {
        selectDropdown.classList.remove("d-none");
        downIcon.style.rotate="-180deg";
    } else {
        selectDropdown.classList.add("d-none");
        downIcon.style.rotate="0deg";
    }
});


let menuDropdown=document.querySelector(".dropdown-m");
let menu=document.querySelector(".menu-header");
menu.addEventListener("click",function(){
    if(menuDropdown.classList.contains("d-none")){
        menuDropdown.classList.remove("d-none")
    }else{
        menuDropdown.classList.add("d-none")
    }
})


// let tabMenu=document.querySelectorAll(".trend-products");


//tab-menu
let tabBtns = document.querySelectorAll(".trending-tab .tab");
let tabContents = document.querySelectorAll(".trend-products");

tabBtns.forEach((tab, index) => {
    tab.addEventListener("click", function(e) {
        e.preventDefault();

        tabBtns.forEach(tab => {
            tab.classList.remove("active");

        this.classList.add("active");

        tabContents.forEach(content => {
            content.style.display = "none";
        });

        tabContents[index].style.display = "block";
    });
});
});



