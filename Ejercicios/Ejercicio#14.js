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

const frase = "La vida programando es una buena vida";

const countFrase = (frase) => {
  const obj = {};

  const arrayFrase = frase.split(" ");

  arrayFrase.forEach((word) => (obj[word] ? obj[word]++ : (obj[word] = 1)));

  return obj;
};
const resultCount = countFrase(frase);
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

const getPendingInvoices = (buyClient) => {
  // ?? Tu tarea es identificar y devolver un arreglo con los ids de los invoices que no han sido pagados.
  const obj = [];

  const invoiceMap = buyClient.map((invoice) => invoice.status);
  invoiceMap.forEach((status) => {
    if (status === "failed") {
      console.log(status);
      obj.push(status);
    }
  });
  return obj.length;
};

const resultPending = getPendingInvoices(buyClient);
console.log(resultPending);
