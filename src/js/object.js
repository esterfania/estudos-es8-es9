const cursos = {
  node: 90,
  angular: 70,
  react: 80,
  vue: 60,
};

// retorna chave e valor dos objetos em um formato array
const chaves = Object.entries(cursos);

document.getElementById("cursos").innerHTML = `<ul>
${chaves.map((nome) => `<li>${nome}</li>`)}
</ul>`;
