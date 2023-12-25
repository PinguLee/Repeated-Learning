let zeroMemoryLoader = "포켓몬";
zeroMemoryLoader = "피카츄";

function firstLoader() {
  return "파이리";
}

function secondLoader() {
  return "리자드";
}

function threeLoader() {
  return "리자몽";
}

function evolutionContainer() {
  const first = firstLoader();
  const second = secondLoader();
  const third = threeLoader();
  return `${first} -> ${second} -> ${third}`;
}

const finalEvolution = evolutionContainer();
console.log(finalEvolution);