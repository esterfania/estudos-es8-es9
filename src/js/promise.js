(function listaPromisse() {
  return fetch("https://www.googleapis.com/books/v1/volumes?q=javascript")
    .then((res) => res.json())
    .then((res) => res.items.map((item) => item.volumeInfo.title))
    .then((res) => renderList("listaPromisses", res));
})();
