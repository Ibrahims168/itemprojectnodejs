const itemsContainer = document.querySelector('.itemsContainer')
const getItemsBtn = document.querySelector('#getItemsBtn')

const renderItems = function (items) {
    itemsContainer.innerHTML = ""
    items.forEach((item) => {
    const {product , brand , price , quantity, _id} = item
    const itemContainer = `
    <div class="item" id="${_id}">
    <h2>name: ${product}</h2>
    <h3>brand: ${brand}</h3>
    <h3>price: ${price}</h3>
    <h3>quantity: ${quantity}</h3>
    </div>
    `
    itemsContainer.innerHTML += itemContainer
});
}

const getItemsFromDB = async function () {
    const items = await $.get('/item/getItems')
    renderItems(items)
}

getItemsBtn.addEventListener("click", getItemsFromDB)
getItemsFromDB()