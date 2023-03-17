const usuarios = [
    {
        nombre: 'Erik',
        edad: 29,
        correo: 'erik@academlo.com'
    },
    {
        nombre: 'Georg',
        edad: 33,
        correo: 'georg@academlo.com'
    },
    {
        nombre: 'Andrea',
        edad: 29,
        correo: 'andrea@hotmail.com'
    }
];

const usuarioEncontrado = usuarios.find(usuario => usuario.edad === 33);
console.log(usuarioEncontrado);

const edad = usuarios.filter(usuario => usuario.edad < 33)
console.log(edad);

const nombres = usuarios.map(usuario => usuario.nombre);
console.log(nombres);
