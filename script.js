import carsData from './cars.json' assert { type: 'json' };

function loadCars() {
    const container = document.getElementById('cars-container');
    container.innerHTML = '';

    carsData.cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card rounded-xl overflow-hidden glow-effect';
        carCard.innerHTML = `
            <div class="h-48 overflow-hidden">
                <img src="${car.image}" alt="${car.brand} ${car.model}" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold">${car.brand} ${car.model}</h3>
                    <span class="bg-cyan-600 text-white text-xs px-2 py-1 rounded">${car.type.toUpperCase()}</span>
                </div>
                <p class="text-gray-400 mb-4">Ano: ${car.year}</p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-cyan-400">R$ ${car.price}<span class="text-sm text-gray-400">/dia</span></span>
                    <button class="btn-primary px-4 py-2 rounded-lg text-sm">Alugar</button>
                </div>
            </div>
        `;
        container.appendChild(carCard);
    });
}

document.getElementById('admin-btn').addEventListener('click', () => {
    document.getElementById('admin-modal').classList.remove('hidden');
    loadAdminCars();
});

document.getElementById('close-admin').addEventListener('click', () => {
    document.getElementById('admin-modal').classList.add('hidden');
});

function loadAdminCars() {
    const container = document.getElementById('admin-cars-list');
    container.innerHTML = '';

    carsData.cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.className = 'bg-gray-700 p-4 rounded-lg';
        carItem.innerHTML = `
            <div class="flex justify-between">
                <div>
                    <h5 class="font-bold">${car.brand} ${car.model}</h5>
                    <p class="text-sm text-gray-400">${car.type} • ${car.year} • R$ ${car.price}/dia</p>
                </div>
                <button class="text-red-400 hover:text-red-600" onclick="deleteCar(${car.id})">
                    <i data-feather="trash-2" class="w-4 h-4"></i>
                </button>
            </div>
        `;
        container.appendChild(carItem);
    });
    feather.replace();
}

function deleteCar(id) {
    const index = carsData.cars.findIndex(car => car.id === id);
    if (index !== -1) {
        carsData.cars.splice(index, 1);
        loadAdminCars();
        loadCars();
    }
}

document.getElementById('car-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newCar = {
        id: carsData.cars.length + 1,
        brand: document.getElementById('brand').value,
        model: document.getElementById('model').value,
        type: document.getElementById('type').value,
        year: parseInt(document.getElementById('year').value),
        price: parseInt(document.getElementById('price').value),
        image: document.getElementById('image').value
    };

    carsData.cars.push(newCar);
    this.reset();
    loadAdminCars();
    loadCars();
});

document.addEventListener('DOMContentLoaded', () => {
    feather.replace();
    loadCars();
});
