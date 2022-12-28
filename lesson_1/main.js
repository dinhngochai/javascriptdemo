var fullName = 'Dinh Ngoc Hai';
var age = 26;
alert(fullName);
alert(age);
/**
 * 
 * 
 */
var nameHai = 'Hai';

console.log(nameHai);

confirm('xac nhan tuoi!');

prompt('xac nhan tuoi');

setTimeout(function () {
    alert('thong bao')
}, 1000);

var accNumber = 3 ** 3;
console.log(accNumber);

// setInterval(function () {
//     console.log('day la log so: ' + Math.random())
// }, 3000);


// Dùng dấu \ nếu muốn dùng dấu nháy " ở trong chuỗi string
var specialVar = "Dinh \"Hai";
console.log(specialVar);

var fullName2 = 'Dinh Ngoc Hai';
if (fullName2) {
    console.log('dung');
}
else {
    console.log('sai');
}

// Function
var myFunction = function() {
    alert('Hi, xin chao cac ban')
}

// Object Type
var myObject = {
    name: 'Ngoc Hai',
    age: 218, 
    adress: 'Ha Noi',
    myFunction: function () {
    }
}
console.log('myObject', myObject);

var myArray = [
    ['arr1', 3, true],
    [12, 'arr5', function (){}]
]
console.log(myArray);
console.log(typeof myArray);


// Declaration Function
function showMessage(){
    console.log('Declaration Function');
}

// Expression Function
var showMessage2 = function(){
    console.log('Expression Function 1');
}

setTimeout(function() {
    console.log('Expression Function 2');
}, 3)

// Template String ES6 (Dung $ để tự nối chuỗi)
var firstName = 'Hai';
var LastName = 'Dinh';
var myString = 'Toi hoc JS tai JS F8! JS';
var spaceHeadEnd = '   Hai   '
console.log('Toi La: ${firstName} ${LastName} ');

// Length
console.log(firstName.length);
// cut string
console.log(LastName.slice(1,3));
console.log(LastName.slice(-3,-1));
// Index
console.log(firstName.indexOf('i'));
//replace
console.log(myString.replace('JS', 'JavaScript'));
console.log(myString.replace(/JS/g, 'JavaS'));
//Upper Case, Lower Case
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
//Trim
console.log(spaceHeadEnd.trim());
//Spit: cắt 1 chuỗi biến hành array
var languages = 'JavaScript, Java, PHP';
var fullName3 = 'DinhNgochai';
console.log(languages.split(', '));
console.log(fullName3.split(''));
// Get a char by index
console.log(LastName.charAt(2));

/// NUMBER

// parseInt, parseFloat, toString
console.log(Number.parseInt('10'));
console.log(Number.parseInt(13.23));
console.log(Number.parseInt('15 is my number'));

console.log(Number.parseFloat(11));
console.log(Number.parseFloat('17'));

var exampleNumber = 19;
console.log(exampleNumber.toString());
