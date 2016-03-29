//Exercise 1
// var gaStudent = {
//   firstName: "Turner",
//   lastName: "William",
//   "phone-number": 5555555555,
// };
//
// gaStudent.lastName = "Jones";
// gaStudent.["phone-number"] = 6666666666;
//
//
// gaStudent.gender = "male";
//
// delete gaStudent.["phone-number"]
//
// for ( var key in gaStudent){
//  console.log(key + " = " + gaStudent[key] + "\n");
// }

//Exercise 2
var library = [
  {
    name: "The Autobiography of Malcolm X",
    author: "Alex Haley",
    alreadyRead: true
  },
  {
    name: "Harry Potter and the Sorcerers Stone",
    author:"JK Rowling",
    alreadyRead: true
  },
  {
    name: "The Outlier",
    author: "Malcolm Gladwell",
    alreadyRead: false
  }
];

for (var i = 0; i <library.length;  i ++){
  console.log(library[i].name + " " + library[i].author )

  if (!library[i].alreadyRead){
    console.log("You did not read this book" + library[i].name + " " + library[i].author)
  }
  else {
    console.log("You did read this book")
  }
}
