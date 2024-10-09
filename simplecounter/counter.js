let count = 0;

const numberCount = document.getElementById("number");

const incrementButtonElement = document.getElementById("lisa");
const lahutamisnupp = document.getElementById("vähenda");
const tühistamiseNupp = document.getElementById("nulli");

incrementButtonElement.onclick = () => {
  count++;
  numberCount.innerHTML = count;
};

lahutamisnupp.onclick = () => {
  if (count > 0)
    count--;
  numberCount.innerHTML = count;
};

tühistamiseNupp.onclick = () => {
  count = 0;
  numberCount.innerHTML = count;
};

document.addEventListener('click', (e) => {
    console.log(e, e.target)
    if(e.target.nodeName === 'DIV' || e.target.parentNode.nodeName === "DIV"){
        alert('Div clicked')
}})
const data = [
{
    Name: "Apelsinimahl",
    Price: 2.30,
},
{
    Name: "Sokolaadiküpsis",
    Price: 1.00,
},
{
    Name: "Sidrunipirukas",
    Price: 1.50,
},
];
const tabeligenereerimine = () => {
    for (let i=0; i < Float32Array.length; i++){
    const row = document.createElement("tr");
for (let j=0; j<data[i].length; j++) {
    const cell = document.createElement("td");
    if (j===0) {
        cell.append(data[i].Name);
    } else {
        cell.append(data[i].Price);
    }
    row.append(cell);
const tabeliKeha = document.querySelector("tbody");
    }
};
tabeligenereerimine()}