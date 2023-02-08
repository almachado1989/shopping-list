//Option 1 without loop - GOOD

//Get target form
const form = document.querySelector('.form');

//Start list item counter
let i = 0;

//Add event listener to form submit event
form.addEventListener('submit', function(event) {

    event.preventDefault();

    const listElement = document.createElement('li');
    listElement.classList.add('shopping-list-item');

    const shoppingItem = document.getElementById('shoppingItem');

    //Check for empty form field
    if (shoppingItem.value === '') {
        return;
    }
    
    //Set HTML of new list item
    listElement.innerHTML = shoppingItem.value;

    //Create button
    const removeItemButton = document.createElement('button');
    removeItemButton.innerHTML = '-';
    removeItemButton.classList.add('remove-from-shopping-list');

    //Add event listener to remove button
    removeItemButton.addEventListener('click', function(event) {
        event.target.parentNode.remove();
        removeItem.removeEventListener();
    })

    //Add remove button to list element
    listElement.appendChild(removeItemButton);   

    //Update list
    document.getElementById('shoppingList').appendChild(listElement);

    //Update list item counter and clear form fieldS
    shoppingItem.value = '';
    i++;
})



// Option 2 with loop - BAD

// let shoppingList = [];

// const button2 = document.getElementById('addToShoppingList2');

// button2.addEventListener('click', function() {

//     shoppingList.push(document.getElementById('shoppingItem2').value);
    
//     let newList = '';

//     for (let i = 0; i < shoppingList.length; i++) {

//         let listItem = `<li>` + shoppingList[i] + `</li>`;
//         newList += listItem;
//     }
//     document.getElementById('shoppingItem2').value = '';
//     document.getElementById('shoppingList2').innerHTML = newList;
    
// })
