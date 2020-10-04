function renderList(...items) {
  return (document.getElementById(items[0]).innerHTML = `<ul>
    ${items[1].map(
      (item) => `<li>
    ${item}
    </li>`
    )}
    </ul>`);
}
