const name = 'Ester';
const lastName = 'Gama';

const fullName = `${name} ${lastName}`;

const nomeCompletoStringPadding = lastName.padStart(name.length + lastName.length, name);

document.getElementById('stringPad').innerHTML = nomeCompletoStringPadding;