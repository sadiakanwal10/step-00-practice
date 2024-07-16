// STEP 00 //
 
//  let message = "HELLO WORLD";      // when we are not assigning data type and  
//  console.log(message);              // typescript judge its type by itself then it is known as inferred typing

//  step 00a //

//  JSON stands for javascript notation object

//  JSON is a text based format that is used to store and transfer data

//  JSON syntax

//   detail {
//     "name" : "sadia",
//     "age" : 23,
//     "city" : "karachi",
//    }

//  JSON is not completety similar to javascript ( THE SYNTAX OF THESE TWO ARE ALMOST SAME) but there are also some difference:

//  JAVASCRIPT   vs    JSON
//  javascript objects can contain function but JSON objects can not contain functions
//  javascript objects can only be used in javascript but JSON objects can also used in many programming language

//  JSON ARRAY (it means we can also have a right to give multiple values to one key through an array) 
//  like this.         "name" : ["apple","mango","banana"],

//   ACCESSING JSON DATA
//   if we want to print whole data then we use console.log(detail);
//   but if we want to access only specific data the we have two options

//  1 DOT NOTATION
//  console.log(detail.name)      if we want to print only name


//   2 square bracket notation
//  console.log(detail["age"]);    if we want to print only age



//   step 00b SYNTAX ERROR (WHEN WE MADE SOME ERROR IN SYNTAX )
 //  lett message = "hello world";
//   console.log(message);

//   step 00c type error  (when we made some mistake in typing)

//   let message = "hello world";
//   console.loger(message);


//    step 00d assignability error (when we store a value string in a variable then re assign its value and give number value 
//     then assignability error creates here )
 //    let message = "hello world";
 //    message = 10;
 //    console.log(message);
