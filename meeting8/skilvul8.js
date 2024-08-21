// skilvul latihan 1 - inheritance 
class Orang {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }
  
    tidur() {
      return `${this.nama} sedang tidur`;
    }
  
    makan() {
      return `${this.nama} sedang makan`;
    }
  }
  
  // Tulis kode kamu di bawah ini
  class Pelajar extends Orang{
    constructor(nama, umur, namaSekolah){
      super(nama, umur,);
      this.namaSekolah = namaSekolah;
    }
    belajar(){
      return `${this.nama} belajar di ${this.namaSekolah}`;
    }
  }
  
  let user = new Pelajar("Terra", 17, "Skilvul");
  console.log(user);


  // skilvul latihan 2 - Polymorphishm
  class Hewan {
    constructor(nama) {
      this.nama = nama;
    }
  
    makan() {
      return "Hewan sedang makan";
    }
  }
  
  // Buat kode kamu di bawah ini
  class Harimau extends Hewan{
    constructor(nama) {
      super(nama);
    }
     makan() {
       return `${this.nama} makan daging`
     }
  }
  
  let harimauSumatra = new Harimau("Harimau Sumatra")
  console.log(harimauSumatra.makan());


  // Tugas 8
  
  