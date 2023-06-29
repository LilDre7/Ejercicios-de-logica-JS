let atacante = 2;
let defensores = 2;

while (atacante > 0 && defensores > 0) {
  let atacanteDado = lanzarDado();
  let defensoresDado = lanzarDado();

  if (atacanteDado > defensoresDado) {
    defensores--;
  } else {
    atacante--;
  }

  if (atacante === 0) {
    console.log("El atacante ganÓ");
  } else if (atacante === 0 && defensores === 0) {
    console.log("Empate");
  } else {
    console.log("El defensor ganÓ");
  }
}

function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// ¿Que es el bucle while?
let tareasPendientes = 5;

while (tareasPendientes > 0) {
  console.log("Realizando tarea...");
  tareasPendientes--;
}

console.log("¡Todas las tareas han sido completadas!");

// Refactorizar esta funtion
let isFirstStepWorking = true;
let isSecondStepWorking = true;
let isThirdStepWorking = true;
let isFourthStepWorking = true;

function workingSteps() {
  if (!isFirstStepWorking) {
    return "First step broken.";
  }
  if (!isSecondStepWorking) {
    return "Second step broken.";
  }
  if (!isThirdStepWorking) {
    return "Third step broken.";
  }
  if (!isFourthStepWorking) {
    return "Fourth step broken.";
  }
  return "Working properly!";
}

// Refactorizar esta funcion
function getFruitsByColor(color) {
  const fruitsByColor = {
    red: ["m", "f"],
    yellow: ["m", "f"],
    purple: ["m", "f"],
  };

  if (!Object.keys(fruitsByColor).includes(color)) {
    throw new Error("Color not found");
  }

  return fruitsByColor[color];
}

console.log(getFruitsByColor("yellow"));
