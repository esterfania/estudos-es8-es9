const { angular, ...resto } = cursos;

console.log(angular);
console.log(resto);

//voltando para o mesmo nível
const novosCursos = { ...resto, angular };
console.log(novosCursos);
