
class AkunBank {
    constructor() {
        var _saldo = 50000;

        // Getter
        this.getSaldo = function() {
            return _saldo;
        };

        // Setter
        this.setSaldo = function(value) {
            if (value >= 0) {
                _saldo += value;
            } else {
                console.log("Saldo tidak boleh negatif");
            }
        };
    }
}

let akun = new AkunBank();
console.log("Saldo awal: " + akun.getSaldo());

akun.setSaldo(10000);
console.log("Saldo setelah setoran: " + akun.getSaldo());

akun.setSaldo(-5000);
console.log("Saldo setelah percobaan pengurangan: " + akun.getSaldo());