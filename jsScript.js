//var name = "Jack";
//var age = 23;
//
//var message = "Hi name is " + name;
//
//console.log(message);
//
//
//var firstName = "Rob";
//var lastName = "Wilson";
//var dateOfBirth = "06-27-84";
//var age = 37;
//
//var loginWelcomeMessage = "Welcome, " + firstName;
//
//
//console.log(loginWelcomeMessage);
//
//var students = ["Timmy", "Janessa", "Arun"];
//console.log(students);
//
//var nList = [];
//nList.push(students[0]);
//console.log(nList);
//
//var index = nList.indexOf("Timmy");
//console.log(nList);
//
//if (index > -1) {
//   nList.splice(index, 1);
//}
//
//console.log(nList);

//var total = 10;
//

function Stud(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function() {
        return "Me " + this.firstName + " " + this.lastName + " and my age is " + this.age;
    };
}

var students = [];

students.push(new Stud("Jimmy", "Fallon", 49));
students.push(new Stud("Maria", "Juju", 54));
students.push(new Stud("Johnny", "Carson", 99));

var student = students[2];

for (var key in student) {
    console.log(student[key]);
}


//var s1 = new Stud("Jimmy", "Fallon", 49)
//console.log(s1);
console.log(student.greeting());


//var student = {
//    firstName: "John",
//    lastName: "Parker",
//    age: 7,
//    greeting: function() {
//        return "Me " + this.firstName;
//    }
//};
//
//var student1 = new Object();
//student1.firstName = "Jim";
//
//var student2 = {};+
//student2.firstName = "Zack";
//student2.lastName = "Black";
//
//var students = [];
//students.push(student);
//students.push(student1);
//students.push(student2);
//
//for (var x = 0; x < students.length; x++) {
//    console.log(students[x]);
//}





//var student = ["Jon", "Sally", "Toto", "Yoshi", "Jake"];
//for (var x = 0; x < student.length; x++) {
//    console.log(student[x]);
//}

//for (var i = 0; i < 16; i++) {
//    if (i % 2 !== 0) {
//        console.log(i + " is odd");
//    } else {
//        console.log(i + " is even")
//    }
//}
//
//var star = "*";
//for (var x = 0; x < 6; x++) {
//    console.log(star);
//    star = star + "*"; 
//}
//
//for (var i = 1; i < 101; i++) {
//    if (i % 3 === 0 && i % 5 === 0) {
//        console.log("CodeMonkey");
//        } else if (i % 3 === 0) {
//            console.log("Code");
//        } else if (i % 5 ===0) {
//            console.log("Monkey");
//        } else {
//            console.log(i);
//        }
//}

//function area(length, width) {
//    return length * width;
//}
//
//
//var rectangleArea = [];
//rectangleArea.push(area(10,15));
//rectangleArea.push(area(10,20));
//rectangleArea.push(area(10,30));
//
//
//
//console.log(rectangleArea);
//
//
//
//var bankBalance =500;
//
//function makeTrans(priceOfSale) {
//    if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Good");
//        console.log(bankBalance);
//    } else {
//        console.log("Purchase Bad");
//        console.log(bankBalance);
//    }
//}
//
//makeTrans(100);
//
//var trans = function(priceOfSale) {
//    if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Good");
//        console.log(bankBalance);
//    } else {
//        console.log("Purchase Bad");
//        console.log(bankBalance);
//    }
//}
//
//
//trans(20);























































