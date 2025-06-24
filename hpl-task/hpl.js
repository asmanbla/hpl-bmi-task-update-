document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("hpl-form").addEventListener("submit", function (e) {
        e.preventDefault();

        let lastdate = new Date(document.getElementById('date').value);

        if (isNaN(lastdate.getTime())) {
            document.getElementById("output").innerHTML = "Data tidak tersedia";
            return;
        }

        let hasil = new Date(lastdate);
        hasil.setDate(hasil.getDate() + 7);
        hasil.setMonth(hasil.getMonth() - 3); 
        hasil.setYear(hasil.getFullYear() + 1);

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let formatted = hasil.toLocaleDateString('id-ID', options);

        localStorage.setItem("hpl_result", formatted);
        window.location.href = "hasil.html"

        document.getElementById("output").innerHTML = "Hasil perhitungan HPL adalah: <strong>" + formatted + "</strong>";
    });

});
