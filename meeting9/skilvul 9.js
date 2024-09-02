// Skilvul  Latihan 1 - Encapsulation
class Pelajar {
    constructor(nama, sekolah) {
      let _nama = nama;
      let _sekolah = sekolah;
      this.getNama = function () {
        return _nama;
      }
      this.getSekolah = function() {
          return _sekolah;
      }
  
      this.setNama = function (nama) {
        _nama = nama;
      }
      this.setSekolah = function (sekolah) {
        _sekolah = sekolah;
      }    
    }
    belajar () {
        return `${this.getNama()} belajar di ${this.getSekolah()}`
    }
  }
  
  
  let pelajar = new Pelajar("Alpha", "Skilvul" );
  console.log(pelajar.belajar());
  
  

 // // Skilvul  Latihan 2 - Abstraction
class PersegiPanjang {
  constructor(panjang, lebar) {
      this.panjang = panjang;
      this.lebar = lebar;
  }
  luas() {
   let hasil = this.panjang * this.lebar;
      return hasil;
  }
  keliling() {
      let hasil = 2 * (this.panjang + this.lebar);
      return hasil;
  }
}

  let persegiPanjang = new PersegiPanjang ('4', '3');
  console.log(persegiPanjang);