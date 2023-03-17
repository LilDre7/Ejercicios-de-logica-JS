// Actualizando las propiedades de un Objecto

const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

// ourDog.name = "Happy Campero" // Para hacer un cambio al objeto
// Segunda opcion para el cambio
ourDog["name"] = "Happy Camper";

// Para agregar un nuevo objeto
ourDog["age"] = "12 age"

// Para eliminar un Objeto
delete ourDog["age"]
delete ourDog.friends

console.log(ourDog);

// Ejercicio#3 
// ----- hasOwnProperty esta propiedad nos funciona para comprodar si existe alguna propiedad ---- //

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp]
    }else {
        return "Not Found"
    }
}
console.log(checkObj);

// Ejercicio #4
// Manipulando Objetos complejos

const myMusic = [
    {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
        "CD",
        "8T",
        "LP"
    ],
    "gold": true
    },
    // New group here - New Object
    {
    "artist": "Beau Carnes",
    "title": "Cereal Man",
    "release_year": 2003,
    "formats": [
        "YouTube video",
    ]
    }
];

// Ejercicio #4
// Coleccion de discotecas 

// Configuración
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
    };

    function updateRecords(records, id, prop, value) {
        if (prop !== "tracks" && value !== "") {
            records[id][prop] = value;
        } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
            records[id][prop] = [value];
        } else if (prop === "tracks" && value !== "") {
            records[id][prop].push(value);
        } else if (value === "") {
            delete records[id][prop];
        }
        return records;
    }

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));


// Propiedad hasOwnProperty su funcion
const fruits = ['Apple', 'Banana','Watermelon', 'Orange'];

console.log(fruits.hasOwnProperty(3));   
console.log(fruits.hasOwnProperty(2)); 

// Propiedad hasOwn y su funcion
console.log(Object.hasOwn(fruits, 3));


// Crear ciclo for que agregue los numeros pares del 2 al 26
myArray = []
for ( let i = 2; i <= 26; i += 2 ){
    myArray.push(i)
}
console.log(myArray);

