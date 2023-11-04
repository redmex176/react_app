
function createPlayer(name) {
    let score = 0;
    return function scoreCount() {
        score++;
        return `${name} - ${score} баллов!`
    }
  };
  const playerOne = createPlayer('Alex');
  const playerTwo = createPlayer('Mike');
  
  console.log(playerOne());
  console.log(playerOne());
  console.log(playerOne());

  const array = [
    "a",
    "c",
    "d", {
      four: 4
    },
  ];

  const obj = {
    a: 23,
    c: 33,
    d: 12, 
    f: {
      four: 4
    }
  }

  console.log(obj);

  const newArray = [...array];
  const newObj = [...obj];

  console.log(newObj);
  console.log(newArray === array);
  // Result 
  // ["a", "c", "d", { four: 4 }]
  
  
  class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayMyName = () => {
        console.log(`My name: ${this.name}, age: ${this.age}`);
    }
  }

  const user = new Human('Alex', 25);
  const user2 = new Human('Mike', 45);

  user.sayMyName();
  user2.sayMyName();

async function getItems(url) {
    const res = await fetch(url);
       
    return await res.json();
}

getItems('https://fakestoreapi.com/produc2ts/1')
    .then(data => console.log(data))
    .catch(() => console.log('eror'))
    .finally(() => console.log('finaly'));


    const arr = [2, 5, 6, ,8];

    const newArr = arr.reduce((acc, num) => acc + num);

    console.log(newArr);

let score = 0;    
function createPlayer(name) {
let score = 0;    

return function scoreCount() {
    score++;
    return `${name} - ${score} баллов!`
}

};

const playerOne = createPlayer('Alex');
const playerTwo = createPlayer('Mike');

console.log(score);
console.log(playerOne());
console.log(playerOne());
console.log(playerTwo());
console.log(score);


async function getItem(url) {
const result = await fetch(url);

return await result.json();
}

async function toLog() {
return await console.log('1');
}

setTimeout(() => console.log('2'));

toLog();
console.log('3');

console.log(null == undefined);
console.log(false == undefined);
console.log(false == null);

}
function isInteger(num) {
return console.log(num % 1 === 0);
}
isInteger(3.4);




const array = [2, 3, 4, 5, 6, 6, 7, 8];

array.splice(0, 0, "22");

console.log(array);

console.log(2 + "we");

function calc (a, b) {
const num = a + b;

} 

const result = calc(2, 3);

const Slider = () => {
return(

    
) 
}
// ТЕСТЫ

function countVowels(str) {
const vowels = "aeiouAEIOU";
let count = 0;

for (const char of str) {
    if (vowels.includes(char)) {
        console.log(char);
        count++;
    }
}

return console.log(count);


}

countVowels('hello');

const arr2 = [ 2 , 2, 2, 3, 5];

const newSet = new Set(arr2);

const newArr = Array.from(newSet);

console.log(newArr);
console.log(typeof(newSet));

const arr1 = [9,9,9, 8],
  arr2 = [9,9,9,9];

//   console.log(arr1.length);
let arr3 = [];
let num=arr2.length;

for(let i = 0; i < arr1.length; i++) {
if(num>0){
arr3.push(arr1[i] + arr2[i]);
num--;
} else arr3.push(arr1[i]);

}

for(let i = 0; i < arr3.length; i++) {
if(arr3[i] == 10) {
    arr3[i] = 0;
    arr3[i+1]+=1;
}

}

console.log(arr3);





console.log();

console.log(arr1);
for(let i = 0; i < arr1.length - 1 ; i++) {
console.log(arr1[i]);
sum = sum + arr1[i] * Math.pow(10, numArr);
numArr--;
console.log(sum);
}

arr1.length


























