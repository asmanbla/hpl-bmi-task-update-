document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("bmi-form").addEventListener("submit", function(e) {
            e.preventDefault();

        let bb = parseFloat(document.getElementById("inputbb").value);
        let tb = parseFloat(document.getElementById("inputtb").value);

        if (isNaN(bb) || isNaN(tb) || bb <= 0 || tb <= 0) {
            document.getElementById("output").innerHTML = "Berat badan dan tinggi badan harus berupa angka positif yang valid";
            return;
        }


        let hasil = bb / ((tb / 100) ** 2);
    
        if (hasil <= 18.5 ) {
            keterangan = "Berat badan Kurang (Underweight)"
        } else if ( hasil <= 24.9 ) {
            keterangan = "Berat badan Normal"
        } else if (hasil <= 29.9) {
            keterangan = "Berat badan Berlebih (Overweight)"
        } else {
            keterangan = "Obesitas"
        }

        document.getElementById("output").innerHTML = 
            "Hasil Perhitungan = " + hasil + "<br>" +
            "Keterangan dari perhitungan = " + keterangan;
    });
});
