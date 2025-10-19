var inventory = [
    [4824, "Shirt", 10, 15.99],
    [6343, "Jeans", 22, 39.99],
    [3223, "Socks", 36, 9.99],
    [2233, "Hat", 12, 14.99],
    [9382, "Jacket", 5, 49.99]
];

var menuChoice;
while (true) {
    window.console.log('Menu:\n=================\n1.View\n2.Update\n3.Exit\n');
    menuChoice = window.prompt('Enter your choice:');

    if (menuChoice == "1") {
        inventory.sort(function(a, b) { return a[0] - b[0]; });
        window.console.log("Inventory:\n");
        for (var i = 0; i < inventory.length; i++) {
            window.console.log(
                inventory[i][0] + ' ' +
                inventory[i][1] + ' (' +
                inventory[i][2] + ') $' +
                inventory[i][3].toFixed(2)
            );
        }
    } else if (menuChoice == "2") {
        var skuNumber = Number(window.prompt('Enter the SKU number of the product:'));
        var newQuantity = Number(window.prompt('Enter the new quantity:'));
        var found = false;

        if (newQuantity < 0) {
            window.alert('Please enter a correct quantity value.');
            continue;
        }

        for (var i = 0; i < inventory.length; i++) {
            if (inventory[i][0] === skuNumber) {
                inventory[i][2] = newQuantity;
                found = true;
                window.alert('Quantity updated successfully.');
                break;
            }
        }

        if (!found) {
            window.alert('SKU number not found.');
        }
    } else if (menuChoice == "3") {
        break;
    } else {
        window.alert('Incorrect Choice.');
    }
}