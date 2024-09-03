class Kendaraan {
    constructor(kecepatan) {
        var _kecepatan = kecepatan;

        this.getKecepatan = function() {
            return _kecepatan;
        };

        this.setKecepatan = function(value) {
            if (value >= 0) {
                _kecepatan = value;
            } else {
                console.log("Kecepatan tidak boleh negatif");
            }
        };
    }
}

let mobil = new Kendaraan(0);
console.log("Kecepatan awal: " + mobil.getKecepatan());

mobil.setKecepatan(100);
console.log("Kecepatan setelah diatur ke 100: " + mobil.getKecepatan());

mobil.setKecepatan(-50);
console.log("Kecepatan setelah diatur ke -50: " + mobil.getKecepatan());