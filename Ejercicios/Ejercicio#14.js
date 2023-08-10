// ** Implementacion del find methodos en arrays ** //
// The find() method returns the value of the first element that passes a test.

function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
}

find([1, 2, 3, 4], function (num) {
  return num % 2 === 0;
});

// De un arreglo de usuarios filtrar todos los usuarios que tengan correo de Academlo con metodo filter
const users = [
  { name: "Erik", email: "erik@gmail.com" },
  { name: "Georg", email: "erik@academlo.com" },
  { name: "Daniela", email: "daniela@academlo.com" },
  { name: "Andrea", email: "andrea@gmail.com" },
];

const correoAcademlo = users.filter((user) =>
  user.email.includes("@academlo.com")
);

console.log(correoAcademlo);

// !! Mostrar las edades que se repitan !! //

const academloStudentnts = [
  {
    name: "Erik",
    age: 22,
  },
  {
    name: "Andrea",
    age: 23,
  },
  {
    name: "Luis",
    age: 24,
  },
  {
    name: "Daniel",
    age: 22,
  },
  {
    name: "Daniel",
    age: 22,
  },
];

const ageStudent = (academloStudentnts) => {
  const resulAges = {};

  const ages = academloStudentnts.map((student) => student.age);
  console.log(ages);

  ages.forEach((age) => {
    if (resulAges[age]) {
      console.log(resulAges[age]);
      resulAges[age]++;
    } else {
      resulAges[age] = 1;
    }
  });
  return resulAges;
};
const result = ageStudent(academloStudentnts);
console.log(result);

const ageStudents = (academloStudentnts) => {
  const obj = {};

  academloStudentnts.forEach((student) =>
    obj[student.age] ? obj[student.age]++ : (obj[student.age] = 1)
  );

  return obj;
};

console.log(ageStudents(academloStudentnts));

// ** Mostrar los globos que se repiten en un array de globos ** //

const ballons = [
  { color: "red" },
  { color: "green" },
  { color: "blue" },
  { color: "blue" },
  { color: "red" },
  { color: "white" },
  { color: "red" },
];

const countBallons = (arr, elemt) => {
  const obj = {};

  // La function debe ser reutilizable

  arr.forEach((elemt) => {});
};

const resultBallons = countBallons(ballons);
console.log(resultBallons);

/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo,
 * fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */

// ** compruebe y muestre si es "primo","fibonacci" y "par"

// Inicio

let num = 2;

// Comprobar si es primo
const isCousin = (num) => {
  if (num <= 1) {
    return false;
  } else if (num <= 3) {
    return true;
  } else if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
      break;
    }
    i += 6;
  }
  return true;
};
console.log(isCousin(num));

// Comprobar si es fibonacci
const isFibonacci = (num) => {
  let a = 0;
  let b = 1;
  while (b <= num) {
    if (b === num) {
      return true;
    }
    let temp = b;
    b = a + b;
    a = temp;
  }
  return false;
};
console.log(isFibonacci(num));

// Comprobar si es par
const pair = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(pair(num));

// Mostrar los resultados

const results = (num) => {
  let resultString = "";

  if (isCousin(num)) {
    resultString += num + " es primo ";
  } else {
    resultString += num + " no es primo ";
  }

  if (isFibonacci(num)) {
    resultString += num + " es fibonacci ";
  } else {
    resultString += num + " no es fibonacci ";
  }

  if (pair(num)) {
    resultString += num + " es par ";
  } else {
    resultString += num + " es impar ";
  }

  return resultString;
};

console.log(results(num));

// !! Cuenta la cantidad de veces que se repite cada palabra !! //
// Ejemplo:
// Si recibes la frase 'La vida programando es una buena vida' tienes que retornar el siguiente objeto:
// {
//   La: 1,
//   vida: 2,
//   programando: 1,
//   es: 1,
//   una: 1,
//   buena: 1
// }

const text = "La vida programando es una buena vida";

const countFrase = (text) => {
  const obj = {};

  const arrayFrase = text.split(" ");

  // Con reduce
  arrayFrase.reduce((word, acc) => {
    obj[acc] = (obj[acc] || 0) + 1;
  }, {});

  return obj;
};
const resultCount = countFrase(text);
console.log(resultCount);

// !! Obtén las facturas pendientes de pago ** //
/*
 * La función getPendingInvoices() recibe como argumento un arreglo de intentos de cargos como el siguiente.
 */

const buyClient = [
  {
    amount: "50USD",
    invoice_id: 1,
    status: "failed",
  },
  {
    amount: "50USD",
    invoice_id: 1,
    status: "success",
  },
  {
    amount: "25USD",
    invoice_id: 2,
    status: "success",
  },
  {
    amount: "75USD",
    invoice_id: 3,
    status: "failed",
  },
  {
    amount: "75USD",
    invoice_id: 3,
    status: "failed",
  },
];

// function findUnpaidInvoices(transactions) {
//   const unpaidInvoiceIds = [];
//   const invoiceStatus = {};

//   transactions.forEach((transaction) => {
//     const { invoice_id, status } = transaction;
//     console.log(transaction);

//     if (status === "success") {
//       invoiceStatus[invoice_id] = "paid";
//       console.log(invoiceStatus);
//     } else if (!invoiceStatus[invoice_id]) {
//       invoiceStatus[invoice_id] = "unpaid";
//       console.log(invoiceStatus);
//     }
//   });

//   for (const [invoice_id, status] of Object.entries(invoiceStatus)) {
//     if (status === "unpaid") {
//       unpaidInvoiceIds.push(parseInt(invoice_id));
//     }
//   }

//   return unpaidInvoiceIds;
// }

// const unpaidInvoices = findUnpaidInvoices(buyClient);
// console.log(unpaidInvoices);

// !! Solucion_del_profe:

function getPendingInvoice(buyClient) {
  // Se necesita iterar sobre cada uno de los elementos del arreglo
  // Se necesita crear un objeto vacío
  // Revisar si tenemos un status success esta revisados
  const unpaind = [];
  buyClient.forEach((charge) => {
    const paid = buyClient.find((charge2) => {
      return (
        charge.invoice_id === charge2.invoice_id && charge2.status === "success"
      );
    });
    if (!paid) {
      unpaind.push(charge.invoice_id);
    }
  });
  return unpaind.slice(0, 1);
}

console.log(getPendingInvoice(buyClient));
