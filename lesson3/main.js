
let massive = ['sasa','asasasa','asasass']

function array (){
    console.log(massive)
}
array();

let num = [1,2,3]
function minNum(a,b,c){
    if (a > b && a > c){
        console.log(a)
    }
    if (b > c && b > a){
        console.log(b)
    }
    if (c > a && c > a){
        console.log(c)
    }
}
minNum(1,5,9);
function minNum2(a,b,c){
    if (a < b && a < c){
        console.log(a)
    }
    if (b < c && b < a){
        console.log(b)
    }
    if (c < a && c < a){
        console.log(c)
    }
}
minNum2(20,50,100)

let num2 = [4,8,1]

function funMax(array) {
    let max = array[0];
    for (const arrays of array) {
        if (arrays > max) max = arrays;
    }
    return max;
};
const funMaxReturn = funMax([2,3,4,5,6,10,4,3,6]);
console.log(funMaxReturn);


////////////////////////

function funMin(array){
    let min = array[0]
    for (const arrays of array) {
        if (arrays < min) min = arrays;
    }
    return min;
}
const arrays = funMin([2,3,4,5,6,10,4,3,6]);
console.log(arrays);


let arr = [1,2,10];

let sum = 0;
function arrPlus (sum2) {
    for (let sums of sum2){
        sum += sums
    }
    return sum
}
let sum1 = arrPlus(arr)
console.log(sum1)

let arr2 = [1,2,10];
let sum2 = 0

function arrPlus1 (sum4) {
    for (let sums of sum4){
        sum2 += sums
    }
    return sum2/sum4.length
}
let sum3 = arrPlus1(arr2)
console.log(sum3)

function random (a) {
    let radomNum = Math.round(Math.random(a)*100)
    console.log(radomNum)
}
random();




////////////////////////////////////////////////////
let arrObj1 = [{name: 'Dima ', age: 13}, {Model: ' Camry'}] // === [ name, age, model ]
let arrObjwrap1 = []

function arrKey1 (arrObjpop4,arrObjpop5){
    for (let arrObjs2 of arrObjwrap1){
        arrObj2 =+ arrObjwrap1
    }
    return arrObjpop4 + arrObjpop5
}
let res1 = arrKey1((Object.keys(arrObj1[0])),(Object.keys(arrObj1[1])));
console.log(res1)




////////////////////////////////////////////
let arrObj = [{name: 'Dima ', age: 13}, {model: ' Camry'}] // === [ Dima, 13, Camry ]
let arrObjwrap = []


function arrKey (arrObjpop,arrObjpop2,arrObjpop3){
    for (let arrObjs1 of arrObjwrap){
        arrObj =+ arrObjwrap
   }
    return arrObjpop + arrObjpop2 + arrObjpop3
}
let res2 = arrKey(arrObj[0].name,arrObj[0].age,arrObj[1].model);
console.log(res2)

/////////////////////////////////




let arrOne = [1,2,3,4]
let arrTwo = [2,3,4,5]
let arrOneTwoWrap = []

let sum11 = arrOne.map(function arrOneArrTwoCalc(a,b) {
    return a + arrTwo[b]
})
console.log(sum11)


//////////////////////////
let arrStri = ['a', 'b', 'c']
arrStri.push(1,2,3)
console.log(arrStri)
////////////////////////
let arrNumRev = [1,2,3]
arrNumRev.reverse(3,2,1)
console.log(arrNumRev)

///////////////////////
let arrNumEn = [1,2,3]
arrNumEn.push(4,5,6)
console.log(arrNumEn)
/////////////////////////
let arrNumSt = [1,2,3]
arrNumSt.unshift(4,5,6)
console.log(arrNumSt)

//////////////
let arrNumSl = [1,2,3,4,5]
console.log(arrNumSl.slice(3,5))
console.log(arrNumSl.slice(0,2))



//////////////////////
let arrNumSpl = [1,2,3,4,5]
arrNumSpl.splice(3,4,'a','b','c')
console.log(arrNumSpl)
let tenNum = [1,2,3,4,5,6,7,8,9,10]
for (tenNums of tenNum){
    if(tenNums % 2 == 0) {
        console.log(tenNums)
    }
}
let tenNum1 = [1,2,3,4,5,6,7,8,9,10];
let tenNum1Void = [];
for (tenNum1s of tenNum1){
    tenNum1Void.push(tenNum1s)
}
console.log(tenNum1Void)

let abcStri = [ 'a', 'b', 'c'];
let abcStriWrap = ""
for (i = 0; i < abcStri.length;i++){
    abcStriWrap = abcStriWrap + abcStri[i]
}
console.log(abcStriWrap)


let abcStriWrap2 = ""
i = 0;

while (i < abcStri.length){
    abcStriWrap2 = abcStriWrap2 + abcStri[i]
    i++;
}
console.log(abcStriWrap2)

let abcStriWrap3 = ""

for ( let numStri in abcStri){
        abcStriWrap3 = abcStriWrap3 + abcStri[numStri]
}

console.log(abcStriWrap3)










