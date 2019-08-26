// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan']

const occasion = 'surprise'

function writeCards(names, occasion) {
    const array = []
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    } return array
}

function countdown(num){
    while (num >= 0){
        console.log( num--)
    }
}