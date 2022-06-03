const itemsContainer = document.querySelector('.itemsContainer')
const getItemsBtn = document.querySelector('#getItemsBtn')
const nameInput = document.getElementById("nameInput")
const brandInput = document.getElementById("brandInput")
const priceInput = document.getElementById("priceInput")
const quantityInput = document.getElementById("quantityInput")
const addItem = document.getElementById("addItem")


const getInputValues = function () {
    const product = nameInput.value
    const brand = brandInput.value
    const price = priceInput.value
    const quantity = quantityInput.value
    return { product, brand, price, quantity }
}

const addItemToDB = async function () {
    const item = getInputValues()
    const dbRes = await axios.post("/item/addNewItem", item)
    getItemsFromDB()
}

addItem.addEventListener('click', addItemToDB)

const renderItems = function (items) {
    itemsContainer.innerHTML = ""
    items.forEach((item) => {
        const { product, brand, price, quantity, _id } = item
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
    const items = await axios.get('/item/getItems')
    renderItems(items.data)
}

getItemsBtn.addEventListener("click", getItemsFromDB)
getItemsFromDB()