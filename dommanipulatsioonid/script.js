const playground = document.getElementById('playground');

console.log(playground.innerText);
console.log(playground.textContent);

playground.append(' Wizard', ' ', 'Crystal ball', ' ', 'Spell book');

// allolev kaotab wizardi ära
//const playground = document.querySelection(' Wizard');

//playground.append(' Wizard');

//allolev kaotab loendi ära
//const playground = document.getElementById('playground');

//playground.appendchild(' Wizard', ' ', 'Crystal ball', ' ', 'Spell book');

const magicalOrb = document.createElement ('div');
magicalOrb.textContent = ':D';
playground.append(magicalOrb);

const scrollOfWisdom = document.createElement('p');
playground.append(scrollOfWisdom);

scrollOfWisdom.innerText = 'Ancient wisdom lies within';
console.log(scrollOfWisdom.innerText);

const spellbook = document.createElement('div');
spellbook.innerHTML = '<p>Spells include: <strong>Levitation</strong> and <em>Invisibility</em>!</p>';
playground.append(spellbook);

console.log(playground.textContent);
console.log(playground.innerHTML);

const temporaryElement = document.createElement('p');
temporaryElement.textContent = "Now you see me...";
playground.append(temporaryElement);

//allolev peidab ära temporaryElemendi
//temporaryElement.remove();
//allolev teeb sama
//playground.removeChild(temporaryElement);

const magicWand = document.createElement('div');
magicWand.setAttribute('id', 'wand1');
magicWand.setAttribute('class', 'magical-item wand');
magicWand.textContent = "Magic Wand";
playground.append(magicWand);

console.log("Spell type:", magicWand.dataset.spell);

//klassi lisamine
magicWand.classList.add('powerful');
console.log("Updated classes:",magicWand.className);

magicWand.style.fontSize = '30px';
magicWand.style.color = 'blue';

const nupp = document.createElement('button');
nupp.textContent = 'Vajuta mind';
playground.append(nupp);

nupp.addEventListener('click', (event) => { 
    event.target.style.backgroundColor = 'green';});

nupp.addEventListener('mouseover', (event) => { 
     event.target.style.backgroundColor = 'grey';});

 nupp.addEventListener('mouseout', (event) => { 
     event.target.style.backgroundColor = 'white';});