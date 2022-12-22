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

setInterval(function () {
    console.log('day la log so: ' + Math.random())
}, 3000);


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