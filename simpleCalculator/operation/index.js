// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let a = require("../add/add");
// let b = require("../substract/substract");
// let c = require("../multiply/multiply");
// let d = require("../divide/divide")

// rl.question("angka a : ", function tes1(x, hasil) {
//   rl.question("operator : ", (op) => {
//     rl.question("angka b : ", (y) => {
//       if (op == "+") {
//         let hasil = `hasil : ${a(Number(x), Number(y))}`;
//         console.log(hasil);
//       } else if (op == "-") {
//         let hasil = `hasil : ${b(Number(x), Number(y))}`;
//         console.log(hasil);
//       } else if (op == "*") {
//         let hasil = `hasil : ${c(Number(x), Number(y))}`;
//         console.log(hasil);
//       } else if (op == "/") {
//         let hasil = `hasil : ${d(Number(x), Number(y))}`;
//         console.log(hasil);
//       }
//       rl.question("apa anda ingin lanjut?(ya/tdk) ", (p, hasil) => {
//         if(p == "ya") {
//           tes1(hasil);
//           console.log
//         } else if (p == "tdk") {
//           console.log('terima kasih sudah menggunakan jasa kami!')
//           rl.close();
//         }
//       })
//     })
//   })
// })

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let a = require("../add/add");
let b = require("../substract/substract");
let c = require("../multiply/multiply");
let d = require("../divide/divide");

function ask(prompt, currentHasil) {
  rl.question(
    `${
      prompt == 2 ? "Mohon jawab ya/tidak! " : ""
    }\nApakah ingin lanjut? (y/t)`,
    (ans) => {
      switch (ans) {
        case "t":
        case "tidak":
        case "no":
        case "n":
          console.log('terima kasih')
          process.exit();
        break;
        case "y":
        case "ya":
        case "yes":
          main(currentHasil);
        break;
        default:
          ask(2);
        break;
      }
    }
  );
}

function main(currentHasil) {
  if (currentHasil) {
    let num1 = currentHasil;
    rl.question("operator : ", (operation) => {
      rl.question("angka b : ", (num2) => {
        // check is num2 == number
        if (isNaN(num2)) {
          console.log("Mohon masukkan angka yang valid!");
          ask();
        }
        let hasil = 0;
        let lanjut = 0;
        switch (operation) {
          case "+":
            hasil = a(Number(num1), Number(num2));
            console.log(`Hasil : ${a(Number(num1), Number(num2))}`);
            lanjut = 1;
            break;
          case "-":
            hasil = b(Number(num1), Number(num2));
            console.log(`Hasil : ${b(Number(num1), Number(num2))}`);
            lanjut = 1;
            break;
          case "*":
            hasil = c(Number(num1), Number(num2));
            console.log(`Hasil : ${c(Number(num1), Number(num2))}`);
            lanjut = 1;
            break;
          case "/":
            hasil = d(Number(num1), Number(num2));
            console.log(`Hasil : ${d(Number(num1), Number(num2))}`);
            lanjut = 1;
            break;
          default:
            console.log(`Operator salah!`);
            lanjut = 0;
            break;
        }
        // goto ask
        ask(lanjut, hasil);
      });
    });
  } else {
    rl.question("angka a : ", (num1) => {
      // check is num1 == number
      if (isNaN(num1)) {
        console.log("Mohon masukkan angka yang valid!");
        ask();
      }
      rl.question("operator : ", (operation) => {
        rl.question("angka b : ", (num2) => {
          // check is num2 == number
          if (isNaN(num2)) {
            console.log("Mohon masukkan angka yang valid!");
            ask();
          }
          let hasil = 0;
          let lanjut = 0;
          switch (operation) {
            case "+":
              hasil = a(Number(num1), Number(num2));
              console.log(`Hasil : ${a(Number(num1), Number(num2))}`);
              lanjut = 1;
              break;
            case "-":
              hasil = b(Number(num1), Number(num2));
              console.log(`Hasil : ${b(Number(num1), Number(num2))}`);
              lanjut = 1;
              break;
            case "*":
              hasil = c(Number(num1), Number(num2));
              console.log(`Hasil : ${c(Number(num1), Number(num2))}`);
              lanjut = 1;
              break;
            case "/":
              hasil = d(Number(num1), Number(num2));
              console.log(`Hasil : ${d(Number(num1), Number(num2))}`);
              lanjut = 1;
              break;
            default:
              console.log(`Operator salah!`);
              lanjut = 0;
              break;
          }
          // goto ask
          ask(lanjut, hasil);
        });
      });
    });
  }
}

// run main app
main();
