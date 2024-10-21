// Example 1
document
    .getElementById("changeTextButton")
    .addEventListener("click", function () {
        let myPara = document.getElementById("myPara");
        myPara.textContent = `This is a new paragraph.`;
    });

// Example 2
document
    .getElementById("higlightFirstCity")
    .addEventListener("click", function () {
        let citiesList = document.getElementById("citiesList");
        console.log(citiesList);
        citiesList.firstElementChild.classList.add("higlight");
    });

// Example 3
document.getElementById("changeOrder").addEventListener("click", function () {
    document.getElementById("coffeeType").textContent = "Latte";
});

// Example 4
document.getElementById("addNewItem").addEventListener("click", function () {
    let newItem = document.createElement("li");
    newItem.textContent = "Cookies";
    document.getElementById("shoppingList").appendChild(newItem); // appending new item to the list, which gets appended to the end of the list.
});

// Example 5
document
    .getElementById("removeLastItem")
    .addEventListener("click", function () {
        let lastItem = document.getElementById("taskList");
        lastItem.lastElementChild.remove();
    });
