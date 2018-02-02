const dogs = [
    { name: 'Paco', age: 5 },
    { name: 'Luna', age: 7 },
    { name: 'Lucina', age: 2}
];

const markup = `<ul>${dogs.map(dog => `<li>${dog.name} is ${dog.age * 7}</li>`).join('')}</ul>`;

document.body.innerHTML = markup;