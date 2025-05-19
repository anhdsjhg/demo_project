
function clearAll() {
    let contents = document.querySelectorAll(".text-content");
    contents.forEach(content => {
        content.classList.remove("active");
        content.style.maxHeight = null;
    });
}


function toggleText(element, text) {
    if (element.classList.contains("active")) {

        element.classList.remove("active");
        element.style.maxHeight = null;
    } else {
        clearAll();
        element.textContent = text;
        element.classList.add("active");
        element.style.maxHeight = element.scrollHeight + "px";
    }
}

function addres() {
    let text = document.getElementById("addres-text");
    toggleText(text, "Парк Первого Президента Республики Казахстан, Улица Майлина 9а");
}

function grafic() {
    let text = document.getElementById("grafic-text");
    toggleText(text, "Каждый день 10:00 - 00:00");
}

function contact() {
    let text = document.getElementById("contact-text");
    toggleText(text, "+7 747 466 0362");
}

// Функция для показа/скрытия overlay
function toggleOverlay(show, content = "") {
    const overlay = document.getElementById("overlay");
    const overlayContent = document.getElementById("overlay-content");

    if (show) {
        overlayContent.innerHTML = content;
        overlay.classList.add("active");
    } else {
        overlay.classList.remove("active");
        overlayContent.innerHTML = "";
    }
}


function showDetails(name, price, image, description) {
    const content = `
        <div class="relative bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <button onclick="toggleOverlay(false)" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">✕</button>
            <img src="${image}" class="w-full h-52 object-cover rounded-lg mb-3">
            <div class="flex justify-between">
               <h2 class="text-xl font-semibold mb-2">${name}</h2>
               <p class="text-lg text-red-500 mb-2 font-semibold">${price} тг</p>
            </div>
            <p class="text-gray-600 text-start">${description}</p>
        </div>
    `;
    toggleOverlay(true, content);
}
