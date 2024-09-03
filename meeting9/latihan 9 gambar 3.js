class Karyawan {
    constructor(nama, gaji, jabatan) {
        this._nama = nama;
        this._gaji = gaji;
        this._jabatan = jabatan;
    }
    setNama(nama) {
        this._nama = nama;
    }
    getNama() {
        return this._nama;
    }
    setGaji(gaji) {
        this._gaji = gaji;
    }
    getGaji() {
        return this._gaji;
    }
    setJabatan(Jabatan) {
        this._jabatan = _jabatan;
    }
    getJabatan() {
        return this._jabatan;
    }
}

class Manajer extends Karyawan{
    constructor(nama, gaji, jabatan) {
        super(nama, gaji, jabatan)
    }
    Beritunjangan() {
        return ` ${this._nama} mendapatkan tunjangan dan gaji sebesar ${this._gaji} dengan jabatan ${this._jabatan}`;
    }
}


let manajer = new Manajer("Udin", "15 Juta", "Head Visor")
console.log(manajer.Beritunjangan());