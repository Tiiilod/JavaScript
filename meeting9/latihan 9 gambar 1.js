// soal 1; Encapsulation dan Gettter/Setter
class Mobil {
    constructor(merk, tahun) {
        this._merk = merk;
        this._tahun = tahun;
    }

    setMerk(merk) {
        this._merk = merk;
    }
    getMerk() {
        return this._merk;
    }
    setTahun(tahun) {
        this._tahun = tahun;
    }
    getTahun() {
        return this._tahun;
    }
}

let mobilSaya = new Mobil("Honda", 2024);
console.log("Merk:", mobilSaya._merk);
console.log("Tahun:", mobilSaya._tahun); 

mobilSaya._merk = "Toyota";
mobilSaya._tahun = 2022;
console.log("Merk baru:", mobilSaya._merk);
console.log("Tahun baru:", mobilSaya._tahun);

