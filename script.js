//console.log ("test");
//console.log(4234);

//var name= "Montana";
//console.log(name);

//var firstName ="dada";
//console.log(firstName);

//alert(name);

//function helloWorld() {
//    return "Hello World";   
//}
//console.log(helloWorld());

//function otherHelloWorld() {
//    console.log("Hello World");
//}

//otherHelloWorld();

// function helloName(name) {
    //console.log("Hello " + name);
//}

//helloName("Montana");

// function dogYears(age){
//     console.log("My dog is " + age + " and that makes him " + (age * 7) + " years old in his human form."
//     );
// }

// dogYears(5);

// function fortuneTeller(name, ocupation, city, age) {
//     return "Hello Stranger. Your name is " + name + " you come from " + city + "you work as a " + ocupation + " and you're " + age + " old ";
// }

// console.log(fortuneTeller("Simona", "Front-end Developper", "Skopje", 27));

// function rollerCoasterRider (height, limit) {
//     if (height > limit) {
//         return "You can ride the roller-coaster.";
//     }else {
//         return "You CAN'T ride the roller coaster.";
//     }
// }

// console.log ( rollerCoasterRider(1.83, 1.68) );

function numberComparison (a, b) {
    if (a > b) {
        return "Brojot " + a + " pogolem od " + b;
    }else if (a < b) {
        return "Brojot " + b +  " pogolem od " + a;
    }
    else {return "Broevite se isti";
    }
}

console.log ( numberComparison (5, 10) );
