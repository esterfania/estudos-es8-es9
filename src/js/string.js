const name = 'Ester';
const lastName = 'Gama';

const fullName = `${name} ${lastName}`;

//padStart
const nomeCompletoStringPadding = lastName.padStart(name.length + lastName.length, name);

document.getElementById('stringPad').innerHTML = nomeCompletoStringPadding;

//padEnd

const nomeCompletoStringPaddingEnd = name.padStart(name.length + lastName.length+20, lastName);

document.getElementById('stringPadEnd').innerHTML = nomeCompletoStringPaddingEnd;

