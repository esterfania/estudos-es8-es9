(async function listaAsync() {
  try {
    const res = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=javascript"
    );
    const dados = await res.json();
    const items = dados.items.map((dado) => dado.volumeInfo.title);
    renderList("asyncawaitlist", items);
  } catch (err) {
    console.error("Deu ruim");
  }
  finally {
      console.log('async lista livros foi executada')
  }
})();
