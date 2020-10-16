const ul = document.querySelector('[data-list]');
const input = document.querySelector('[data-input]');
const addButton = document.querySelector('[data-addButton]');
const itemsArray = [
    {
        value: "first item (existing)",
        id: 1
    },
    {
        value: "second item (existing)",
        id: 2
    },
    {
        value: "third item (existing)",
        id: 3
    }
]

//pobiera id z data-item-id, wywołuje removeItem i renderItems
const handleRemoveButton = (e) => {
    e.target.parentNode.remove();
    removeItem();
}

//usuwa item o konkretnym id z items
const removeItem = (itemId) => {
    itemsArray.pop(itemId);
    console.log(itemsArray);
}

//generuje HTMLa na podstawie bieżącego stanu items
const renderItems = () => {
        ul.innerHTML = "";
        itemsArray.forEach((item) => {
            const listItem = document.createElement('li');
            const textNode = document.createTextNode(item.value);
            const deleteButton = document.createElement("button");
            deleteButton.textContent = 'Usuń';
            deleteButton.setAttribute('data-item-id', item.id);
            deleteButton.addEventListener('click', (event) => {
                handleRemoveButton(event.target.dataset.itemId);
            });
            listItem.append(textNode, deleteButton);
            ul.appendChild(listItem);
        })  
}

//dodaje nowy obiekt item do arraya items
const addItem = () => {
    if (input.value === '') return;
    let item = {
        value: input.value,
        id: itemsArray.length+1,
    }
    itemsArray.push(item);
}

//pobiera value z inputa, wywołuje addItem i renderItems
const handleAddButton = () => {
    addItem();
    renderItems();
    input.value = "";     
}

renderItems();
addButton.addEventListener('click', handleAddButton)