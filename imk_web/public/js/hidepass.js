function togglePasswordVisibility(inputField, hideButton) {
    if (inputField.type === "password") {
        inputField.type = "text";
        hideButton.src = "../../img/witness_2210317.png";
       } else {
        inputField.type = "password";
        hideButton.src = "../../img/hide_2767146.png";
    }
}

const tableEditButton = document.getElementById("tableEditButton");
const exitButton = document.getElementById("exitButton");

tableEditButton.addEventListener("click", function () {
    // Mengisi konten tabel saat tombol di klik
    fillTableContent();
});

exitButton.addEventListener("click", function () {
    // Kembali ke halaman selanjutnya saat tombol exit diklik
    window.location.href = './FoodStatusRestaurant.html';
});

function fillTableContent() {
    // Array untuk menyimpan data makanan, resto, dan waktu
    const data = [
        ["Makanan 1", "Resto 1", "Waktu 1"],
        ["Makanan 2", "Resto 2", "Waktu 2"],
        ["Makanan 3", "Resto 3", "Waktu 3"],
        ["Makanan 4", "Resto 4", "Waktu 4"],
        ["Makanan 5", "Resto 5", "Waktu 5"],
        ["Makanan 6", "Resto 6", "Waktu 6"],
        ["Makanan 7", "Resto 7", "Waktu 7"],
        ["Makanan 8", "Resto 8", "Waktu 9"],
        ["Makanan 9", "Resto 9", "Waktu 9"],
        ["Makanan 10", "Resto 10", "Waktu 10"],
        ["Makanan 11", "Resto 11", "Waktu 11"],
        ["Makanan 12", "Resto 12", "Waktu 12"],
        ["Makanan 13", "Resto 13", "Waktu 13"],
        ["Makanan 14", "Resto 14", "Waktu 14"],
    ];

    // Mendapatkan elemen tabel
    const table = document.getElementById("tabel");

    // Mengisi konten tabel dengan data
    for (let i = 0; i < data.length; i++) {
        const row = table.rows[i + 1];
        const rowData = data[i];

        // Mengisi sel-sel dalam baris dengan data
        for (let j = 0; j < rowData.length; j++) {
            const cell = row.cells[j];
            cell.textContent = rowData[j];
        }
    }
}

                    // Mendapatkan elemen dropdown dan daftar hari
            const dropdownButton = document.getElementById("Dropdown");
            const dayList = document.querySelectorAll(".dropdown-content li");

            // Menambahkan event listener untuk meng-handle klik pada dropdown button
            dropdownButton.addEventListener("click", function () {
                // Toggle tampilan dropdown content
                const dropdownContent = document.querySelector(".dropdown-content");
                dropdownContent.classList.toggle("hidden");

                // Menambahkan event listener untuk setiap item hari
                dayList.forEach(function (day) {
                    day.addEventListener("click", function () {
                        // Mengganti teks pada tombol dropdown dengan hari yang dipilih
                        const selectedDay = day.textContent;
                        document.querySelector(".text-2xl").textContent = selectedDay;

                        // Sembunyikan dropdown setelah memilih
                        dropdownContent.classList.add("hidden");

                        // Panggil fungsi untuk melakukan filter berdasarkan hari
                        filterTableByDay(selectedDay);
                    });
                });
            });

            // Fungsi untuk melakukan filter berdasarkan hari
            function filterTableByDay(selectedDay) {
                // Mendapatkan elemen tabel
                const table = document.getElementById("tabel");

                // Mendapatkan semua baris kecuali header
                const rows = table.querySelectorAll("tbody tr");

                // Loop melalui setiap baris dan sembunyikan yang tidak sesuai dengan hari yang dipilih
                rows.forEach(function (row) {
                    const dayCell = row.cells[0]; // Mengasumsikan hari disimpan di sel pertama
                    const rowDay = dayCell.textContent.trim();

                    // Menyembunyikan atau menampilkan baris berdasarkan hari yang dipilih
                    if (rowDay === selectedDay || selectedDay === "All") {
                        row.style.display = "";
                    } else {
                        row.style.display = "none";
                    }
                });
            }
