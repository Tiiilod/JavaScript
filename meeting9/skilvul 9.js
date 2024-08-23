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
  
  
  