

// ********** JavaScript VAriables****************

var a=11  // 

var a=50   // Reinitilize & Redeclare 

a="Declare Without Initilization"  // can be access Without Initialization

var b=a

b=21

console.log(cc);

var cc

console.log(a);

let aa = 'Let Variable'

aa="Not Redeclare Bt Reinitilize"  // 

console.log(aa);

const dd='Constatnt Varibale' // not be Redeclare And Reinitilize 

console.log(dd);

// console.log(ee);




console.log('******STRING**********');

   var str='vivek'

   let str2=str

   str2='jadhav'   // strings are immutable unchangable   mklop ;

   console.log(str,str.length,);  

   console.log(str.split('').reverse(),typeof(str)); // Reverse String

   console.log(...str.split('').reverse(),typeof(str));  // Reverse String 

   let str3=""

//    console.log(str.replace('jadhav','vivek'));

   console.log(str.toUpperCase());

   console.log(str.toLocaleLowerCase());

   console.log(str.indexOf('k'));  // return a index of Given Character. 

   console.log(str.charCodeAt(1)); // Return A character's unicode of the given Number 

   console.log(str.slice(0,2));  //  'vi' return the subString We have to give Start Index & end Index , Last Index In missing 

   console.log(str.charAt(0));  // Return a Character Present at Given Number 

   console.log(`${str.concat(str2)}`);
   
   let stringManiulation="Radhe-Radhe "

   console.log(stringManiulation,stringManiulation.length); // 12

   console.log(stringManiulation.trim().length); // 11

   console.log(str2);

   let StringReverse="Reverse A String"

   console.log(...StringReverse.split('').reverse());


//    ************** ARRAY*************************

   let array=[5313,6413,9863,9463,9643,5613,50]

   let array2=[]

   array2.push(array)

   console.log(...array2);

  array.unshift("unshift")  // added at The first Position

  array.push("push")  //  added at The Last Position

//   array.shift()  // removed first Element

//   array.pop()  // removed Last Element

  console.log(...array,array.length) // ... Spread Operator

//    console.log(array2.push(array));

//    console.log(array.length);