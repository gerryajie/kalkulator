const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// nilai phi
const phi = 3.14;

function luasAlasTabung(phi, jariJari) {
    let luasAlasTabung = phi * (jariJari ** 2);
    return luasAlasTabung
}

function volume(phi, jariJari, tinggi) {
    let volume = luasAlasTabung(phi, jariJari) * tinggi;
    return volume
}

console.log('Welcome to joki MTK\n');
rl.question('berapa luas alas yang kamu ingin[input jariJari yang kamu perlu. sistem akan otomatis mengalikan dengan phi]=>', (jariJari) => {
    let hasilAlas = luasAlasTabung(phi, jariJari);
    console.log(`${hasilAlas} cm`);
    rl.question('berapa tinggi yang kamu inginkan[sistem akan otomatis mengalikan dengan luas alas]=>', (tinggi) => {
        let hasilAkhir = volume(phi, jariJari, tinggi);
        console.log(`${hasilAkhir} cm`);

        rl.close();
    });
});

rl.on('close', () => {
    process.exit();
  });  