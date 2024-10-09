class Pesawat {
    constructor(jenis, kecepatan) {
        this.jenis = jenis;
        this.kecepatan = kecepatan; 
    }
    terbang() {
        return `${this.jenis} sedang terbang dengan kecepatan ${this.kecepatan} km/jam.`;
    }
}

class Jet extends Pesawat{
    constructor(jenis, kecepatan, kapasitasBahanBakar) {
        super(jenis, kecepatan);
        this.kapasitasBahanBakar = kapasitasBahanBakar;
    }
    terbang() {
        return `${this.jenis} sedang terbang dengan kecepatan ${this.kecepatan} km/jam.`;
    }
    isiBahanBakar() {
        return `Mengisi bahan bakar sebanyak ${this.kapasitasBahanBakar} liter.`;
    }
}

let jetSaya = new Jet ("Jet Tempur", 1500, 6000 );
console.log(jetSaya.terbang());
console.log(jetSaya.isiBahanBakar());
