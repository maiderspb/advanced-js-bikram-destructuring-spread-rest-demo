//RESUELVE LOS EJERCICIOS AQUÍ
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const ana =empleados[1]
const emailLuis = empleados[0].email
 
// Inicialmente
let a = 5;
let b = 3;

[b,a]=[a,b]

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };
  const {today:maximaHoy, tomorrow:maximaManana}= HIGH_TEMPERATURES
  console.log(maximaHoy);
  console.log(maximaManana);
   
sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26

function sumEveryOther (...args){
    return args.reduce ((sum,num) => sum + num, 0);
}

addOnlyNums(1, "perro", 2, 4); //7

function addOnlyNums(...args){
    return args.filter(arg => typeof arg=== "number").reduce((sum,num) => sum + num, 0)
}

countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4a

function countTheArgs(...args){
    return args.length;
}

function combineTwoArrays (array1,array2){
    return [...array1,...array2];
}

onlyUniques("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"]
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

function onlyUniques(...args){
    return [...new Set (args)];
}

combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

function combineAllArrays(...arrays){
    return arrays.flat();
}

function sumAndSquare(...args){
    return args.reduce((sum, num) => sum + num **2, 0);
}