// no 1
var num =3 ;
switch (num) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "tuesday";
    break;
  case 3:
    day = "wednesday";
    break;

  default:
    day = 'unknown'
    break;  
}
console.log('Today is ' + day);
// no 2
for (let i = 1; i <= 15; i++) {
    // console.log(i);
    if (i % 3 === 0 && i%5 === 0 ) {
      console.log("fizzbuzz " +i);
    } else if (i % 3 === 0) {
      console.log("fizz " + i);
        
    } else if(i % 5 === 0) {
      console.log("buzz " + i);
    
    } 
  }

  
// no 3
var i = 6;
for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i % 2 === 0) {
    console.log(i);
  }
}
// no 4
for (let i = 0; i <= 15; i++) {
    if (i % 3 === 0) {
      console.log('multiple 3');
    }
}