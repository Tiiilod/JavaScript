class Karyawan {
   constructor(nama, gaji) {
    var _nama = nama;
    var _gaji = gaji;

        this.getNama = function() {
            return _nama;
        };

        this.setNama = function(nama) {
            _nama = nama;
        };

        this.getGaji = function() {
            return _gaji;
        };

        this.setGaji = function(gaji) {
            _gaji = gaji;
     };
   }

}

class Manajer extends Karyawan {
    constructor(nama, gaji) {
        super(nama, gaji);
    }
    buatLaporan() {
        return `Manager ${this.getNama()} membuat laporan.`;
    }
}

let manager = new Manajer("Turky", 999999999999999);
console.log(manager.getNama()); 
console.log(manager.getGaji()); 
console.log(manager.buatLaporan());