//Nomor 1

const pengunjung = 6;
if (pengunjung >= 5) {
  console.log("Membayar Tiket Penuh");
} else if (pengunjung >= 2 && pengunjung < 5) {
  console.log("Bayar Tiket Setengah Harga");
} else if (pengunjung < 2) {
  console.log("Tidak Bowleh Masuk");
}

//nomor 2

const usia = 28;
if (usia >= 18) {
  console.log("Sudah Mendapatkan SIM");
} else {
  console.log("Belum Mendapatkan SIM");
}

//nomor 3
const angka = 25;
if (angka == 0) {
  console.log("Netral");
} else if (angka < 0) {
  console.log("Negative");
} else if (angka > 0) {
  console.log("Positive");
}

// nomer 4
const x = 8;
const y = 5;

if (x > 0 && y > 0) {
  console.log("Kanan atas");
} else if (x < 0 && y < 0) {
  console.log("Kiri bawah");
} else if (x > 0 && y < 0) {
  console.log("Kanan bawah");
} else if (x < 0 && y > 0) {
  console.log("Kiri atas");
}

// nomer 5
const totalBelanja = 100;

let diskon = 0;

if (totalBelanja >= 200) {
  diskon = 0.15;
} else if (totalBelanja >= 100 && totalBelanja <= 199) {
  diskon = 0.1;
}

const totalBayar = totalBelanja - totalBelanja * diskon;

console.log(`Yang Harus Dibayar Rp ${totalBayar}.`);

// nomer 6
const umur = 10;
if (umur >= 18) {
  console.log("Registrasi Berhasil!");
} else {
  console.log("Belum Registrasi");
}
