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

// Function
var myFunction = function() {
    alert('Hi, xin chao cac ban')
}

function myFunction1() {
    alert('Day la ham 1');
}
myFunction1();
console.log(typeof myFunction, typeof myFunction1);

function callName(name1, name2){
    alert('ten la: ' + name1);
    alert('day la: '+ name2);
}
callName('hai');

// Vòng For of
var car = ['honda', 'suzuki', 'mini'];
for (var param of car) {
    console.log(param);
}

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

console.log('====================================');
/// NUMBER

// parseInt, parseFloat, toString, isFinite, isInteger
console.log(Number.parseInt('10'));
console.log(Number.parseInt(13.23));
console.log(Number.parseInt('15 is my number'));

console.log(Number.parseFloat(11));
console.log(Number.parseFloat('17'));

var exampleNumber = 19;
console.log(exampleNumber.toString());

var alpha = 'abc';
var floatNumb = 0.2; var intNumb = 3;
console.log(Number.isFinite(alpha), Number.isFinite(floatNumb));
console.log(Number.isInteger(floatNumb), Number.isInteger(intNumb));
// NaN la kieu so khong hop le, check NaN thi ta dung isNaN
var resultNaN = 20 / 'abc';
console.log(resultNaN,isNaN(resultNaN));

console.log('================================');
/// Mảng
// toString, Join, Pop, Push, Shift, UnShift, Splicing, slicing, concat

var languages1 = [
    'javaScript',
    'PHP',
    'html',
    'css'
]
var  languages2 = [
    'Dart',
    'Vader'
]
//join: chen giua cac phan tu trong mang 
console.log(languages1.join('-'));
//pop: xoa phan tu cuoi trong mang
console.log(languages1.pop(), languages1);
//shift: xoa phan tu dau trong mang
console.log(languages1.shift(), languages1);
console.log(languages1.unshift('Dinh'), languages1);
//push: them 1 hoac nhieu gia tri vao mang
console.log(languages1.push('nodeJS', 'Swing'), languages1);

//splice: xoa mot phan tu tai vi tri bat ky
console.log(languages1.splice(1,1), languages1);
//splice: muon chen them 1 hoac nhieu phan tu vao vi tri bat ky hoặc vừa chèn vừa xoá
console.log(languages1.splice(1, 1, 'Hai', 'Noah'), languages1);

//concat: noi 2 mang lai voi nhau
console.log(languages1.concat(languages2));

//slice: cat mang
console.log(languages1.slice(1,2));
console.log(languages1.slice(-3, -1));

console.log('==================================');
/// Object Constructor
// Lưu ý: Viết hoa chữ cái đầu để tạo Oj Constructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        var name = this.firstName + ' ' + this.lastName;
        return name;  // gọi 1 hàm trong 1 object, ta dùng this giống như để thay cho tên object mà chứa nó.
}
}
var author = new User('Hai', 'Dinh', 'Ava');
var student = new User('Nguyen', 'Vu', 'Ava');

console.log(author);
console.log(student);

// thêm thuộc tính cho object
author.title = 'Day la Thay Giao';
student.chucVu = 'Con day la hoc sinh';
console.log(author);
console.log(student);
console.log(author.getName());
console.log(student.getName());

// Object Prototype: dùng để thêm thuộc tính hoặc phương thức ở bên ngoài vào Object Constructor
User.prototype.classname = 'F8';
console.log(author.classname);
User.prototype.getClassName = function() {
    return this.classname;
}
console.log(student.getClassName());


/// Đối tượng Date
var date = new Date();

var day = date.getDate();
var month = date.getMonth() +1;
var year = date.getFullYear();
console.log(date);
console.log('ngay: '+ day +' thang: '+ month +' nam: '+ year);

// Tai lieu hoc: https://developer.mozilla.org/en-US/docs/Web/JavaScript

