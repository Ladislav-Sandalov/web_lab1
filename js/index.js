let apartment = {
    address: "ул. Пушкина, д. 10",
    rooms: 3,
    price: 5000000,
    repair: "Капитальный"
};

// Функция для вывода информации о квартире
function showApartmentInfo() {
    const infoDiv = document.getElementById('apartment-info');
    if (infoDiv.style.display === 'none') {
        infoDiv.style.display = 'block'; // Развернуть блок
    } else {
        infoDiv.style.display = 'none'; // Свернуть блок
    }
    infoDiv.innerHTML = `
        <p>Адрес: ${apartment.address}</p>
        <p>Количество комнат: ${apartment.rooms}</p>
        <p>Цена: ${apartment.price} руб.</p>
        <p>Ремонт: ${apartment.repair}</p>
    `;
}

// Функция для редактирования информации о квартире
function editApartmentInfo() {
    const contentDiv = document.getElementById('edit-form');
    if (contentDiv.style.display === 'none') {
        contentDiv.style.display = 'block'; // Развернуть блок
    } else {
        contentDiv.style.display = 'none'; // Свернуть блок
    }
    document.getElementById('address').value = apartment.address;
    document.getElementById('rooms').value = apartment.rooms;
    document.getElementById('price').value = apartment.price;
    document.getElementById('repair').value = apartment.repair;
}

// Функция для обновления информации о квартире
function updateApartmentInfo() {
    apartment.address = document.getElementById('address').value;
    apartment.rooms = parseInt(document.getElementById('rooms').value, 10);
    apartment.price = parseInt(document.getElementById('price').value, 10);
    apartment.repair = document.getElementById('repair').value;

    // Обновляем информацию на странице
    showApartmentInfo();
}
