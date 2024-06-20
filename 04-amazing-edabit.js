// https://edabit.com/challenge/bCMai3bYsRpikCyrh

function amazingEdabit(str) {
// 1. Find edabit 
  // 2. Check if it's amazing
  // 3. edabit not change string
  // 4. replace  'amazing' to 'not amazing'.

  const r = /edabit/g;
  
  const find = r.test(str);

  // using ternary Operator 
  return /edabit/g?str: str.replace('amazing','not amazing');

  // console.log(find)
  // if(find){
  //   return str
  // }else{
  // return str.replace('amazing','not amazing')
  //   // return str + ' is not amazing.'
  // }

}

console.log(amazingEdabit('edabit is amazing.')); //, "edabit is amazing.")
console.log(amazingEdabit('Mubashir is amazing.')); //, "Mubashir is not amazing.")
console.log(amazingEdabit('Trump is amazing.')); //, "Trump is not amazing.")
console.log(amazingEdabit('Infinity is amazing.')); //, "Infinity is not amazing.")
/* Test.assertEquals(amazingEdabit("Mubashir and edabit are amazing."), "Mubashir and edabit are amazing.")
Test.assertEquals(amazingEdabit("Matt is amazing."), "Matt is not amazing.")
Test.assertEquals(amazingEdabit("Helen is amazing."), "Helen is not amazing.")
Test.assertEquals(amazingEdabit("Python and edabit are amazing."), "Python and edabit are amazing.")
Test.assertEquals(amazingEdabit("C++ is amazing."), "C++ is not amazing.")
Test.assertEquals(amazingEdabit("javascript is amazing."), "javascript is not amazing.")
Test.assertEquals(amazingEdabit("java is amazing."), "java is not amazing.")
Test.assertEquals(amazingEdabit("ruby is amazing."), "ruby is not amazing.")
Test.assertEquals(amazingEdabit("SQL is amazing."), "SQL is not amazing.")
Test.assertEquals(amazingEdabit("CSS is amazing."), "CSS is not amazing.")
Test.assertEquals(amazingEdabit("Pakistan is amazing. edabit"), "Pakistan is amazing. edabit")
Test.assertEquals(amazingEdabit("You and edabit are amazing."), "You and edabit are amazing.")
Test.assertEquals(amazingEdabit("Matt and edabit are amazing."), "Matt and edabit are amazing.")
Test.assertEquals(amazingEdabit("Helen and edabit are amazing."), "Helen and edabit are amazing.")
Test.assertEquals(amazingEdabit("Everyone is amazing."), "Everyone is not amazing.")
Test.assertEquals(amazingEdabit("Swift and edabit are amazing."), "Swift and edabit are amazing.") */
