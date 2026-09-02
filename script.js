const rooms = [
    { id: 1, name: "Conference Room ", capacity: 10, image: "room1.jpg" },
    { id: 2, name: "Creative Hub", capacity: 6, image: "room2.jpg" },
    { id: 3, name: "Buissness Room", capacity: 2, image: "room3.jpg" }
];

const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];

let bookings = {}; 
rooms.forEach(room => {
    bookings[room.id] = {};
    timeSlots.forEach(time => {
        bookings[room.id][time] = Math.random() < 0.3 ? "Booked by Admin" : null;
    });
});

let currentSelection = { roomId: null, time: null };

const roomsContainer = document.getElementById('rooms-container');
const selectionDisplay = document.getElementById('selection-display');
const bookBtn = document.getElementById('bookBtn');
const bookingForm = document.getElementById('booking-form');
const successMessage = document.getElementById('success-message');

function init() {
    renderRooms();
    setupEventListeners();
}

function renderRooms() {
    roomsContainer.innerHTML = '';
    rooms.forEach(room => {
        const col = document.createElement('div');
        col.className = 'col-md-6';
        
        let slotsHtml = '';
        timeSlots.forEach(time => {
            const isBooked = bookings[room.id][time] !== null;
            const isSelected = currentSelection.roomId === room.id && currentSelection.time === time;
            
            let btnClass = 'slot-btn ';
            if (isBooked) btnClass += 'slot-booked';
            else if (isSelected) btnClass += 'slot-selected';
            else btnClass += 'slot-available';

            const dataAttrs = `data-room-id="${room.id}" data-time="${time}"`;
            const disabledAttr = isBooked ? 'disabled' : '';

            slotsHtml += `<button class="${btnClass}" ${dataAttrs} ${disabledAttr}>${time}</button>`;
        });

        col.innerHTML = `
            <div class="card room-card h-100">
                <img src="${room.image}" class="card-img-top" alt="${room.name}" style="height: 150px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${room.name}</h5>
                    <p class="card-text text-muted small">Capacity: ${room.capacity} people</p>
                    <div class="d-flex flex-wrap">
                        ${slotsHtml}
                    </div>
                </div>
            </div>
        `;
        roomsContainer.appendChild(col);
    });
}

function setupEventListeners() {

    roomsContainer.addEventListener('click', function(e) {

        if (e.target.classList.contains('slot-btn') && !e.target.disabled) {
            const roomId = parseInt(e.target.getAttribute('data-room-id'));
            const time = e.target.getAttribute('data-time');
            selectSlot(roomId, time);
        }
    });

    bookingForm.addEventListener('submit', handleBooking);
}

function selectSlot(roomId, time) {
    currentSelection = { roomId, time };
    
    updateSelectionUI();
    renderRooms();
}

function updateSelectionUI() {
    if (currentSelection.roomId) {
        const roomName = rooms.find(r => r.id === currentSelection.roomId).name;
        selectionDisplay.innerHTML = `<strong>${roomName}</strong><br>at ${currentSelection.time}`;
        selectionDisplay.classList.remove('text-muted');
        bookBtn.disabled = false;
    } else {
        selectionDisplay.innerHTML = "No slot selected";
        selectionDisplay.classList.add('text-muted');
        bookBtn.disabled = true;
    }
}

function handleBooking(e) {
    e.preventDefault();
    const userName = document.getElementById('userName').value;
    
    if (!currentSelection.roomId) return;

    const btnOriginalText = bookBtn.innerText;
    bookBtn.innerText = "Processing...";
    bookBtn.disabled = true;

    setTimeout(() => {

        bookings[currentSelection.roomId][currentSelection.time] = userName;
        
    
        successMessage.classList.remove('d-none');
        bookBtn.innerText = "Booked!";
        
        setTimeout(() => {
            currentSelection = { roomId: null, time: null };
            updateSelectionUI();
            renderRooms();
            successMessage.classList.add('d-none');
            bookBtn.innerText = btnOriginalText;
            document.getElementById('userName').value = '';
        }, 2000);

    }, 800);
}
init();