function buscar() {
    searchContainer.classList.toggle('ativado');
    filterItems();
}

function openMenu() {
    pktNavigation.classList.toggle('ativar')
}

let pktNavigation = document.querySelector('.pkt-navigation')
let pktHeader = document.querySelector('.pkt-header')
pktHeader.addEventListener("click", () =>{
    openMenu()
})

let searchContainer = document.querySelector('.search-container');
let searchInput = document.querySelector('#search-input');
let botao = document.querySelector('#toolbar-container button');
botao.addEventListener("click", () => {
    buscar();
});

function filterItems() {
    const searchTerm = searchInput.value.toLowerCase();
    const items = document.getElementsByClassName('item');

    let hasVisibleItems = false;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemDescription = item.querySelector('.shirt-especification').textContent.toLowerCase();
        if (itemDescription.includes(searchTerm)) {
            item.style.display = 'block';
            hasVisibleItems = true;
        } else {
            item.style.display = 'none';
        }
    }

    if (hasVisibleItems) {
        document.getElementById('Selecoes').style.display = 'flex';
    } else {
        document.getElementById('Selecoes').style.display = 'none';
    }
}


window.addEventListener('DOMContentLoaded', function() {
    searchInput.addEventListener('input', function() {
        filterItems();
    });
});