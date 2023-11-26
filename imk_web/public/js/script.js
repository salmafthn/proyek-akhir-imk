document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitData");

    submitButton.addEventListener("click", function () {
        // Mengambil nilai dari input
        const foodInput = document.getElementById("food").value;
        const restaurantInput = document.getElementById("restaurant").value;
        const timeInput = document.getElementById("time").value;

        // Memanggil fungsi untuk menambahkan data ke tabel
        addDataToTable(foodInput, restaurantInput, timeInput);
    });

    function addDataToTable(food, restaurant, time) {
        // Mendapatkan elemen tabel
        const table = document.getElementById("tabel");

        // Membuat baris baru
        const newRow = table.insertRow(-1);

        // Membuat sel-sel baru dan mengisinya dengan data
        const foodCell = newRow.insertCell(0);
        const restaurantCell = newRow.insertCell(1);
        const timeCell = newRow.insertCell(2);

        foodCell.textContent = food;
        restaurantCell.textContent = restaurant;
        timeCell.textContent = time;
    }

    const nextButton = document.getElementById("next");
    const fotoButton = document.getElementById("foto");
    const editButton = document.getElementById("edit");
    const exitButton = document.getElementById("exitButton");
    const editPopup = document.getElementById("editPopup");
    const cancelEditButton = document.getElementById("cancelEdit");
    const submitEditButton = document.getElementById("submitEdit");
    const editedTextElement = document.getElementById("makananDescribe"); 

    // Next button click event
    nextButton.addEventListener("click", function () {
        window.location.href = './tableScheduling.html';
    });

    fotoButton.addEventListener("click", function () {
        // Trigger click on the hidden file input
        document.getElementById("fileInput").click();
    });

    // File input change event (handle image upload)
    const fileInput = document.getElementById("fileInput");
    fileInput.addEventListener("change", function () {
        const selectedFile = fileInput.files[0];
    });

    // Exit button click event
    exitButton.addEventListener("click", function () {
        // Handle the exit logic (replace './FoodStatusRestaurant.html' with your actual page)
        window.location.href = './restaurant.html';
    });

   

    // Edit button click event (show popup)
    editButton.addEventListener("click", function () {
        editPopup.classList.remove("hidden");
    });

    // Cancel Edit button click event (hide popup)
    cancelEditButton.addEventListener("click", function () {
        editPopup.classList.add("hidden");
    });

    // Submit Edit button click event (change text content and hide popup)
    submitEditButton.addEventListener("click", function () {
        const editedText = document.getElementById("editedText").value;
        editedTextElement.textContent = editedText;
        editPopup.classList.add("hidden");
    });

});
