function amazingEdabit(str) {
 let result = ""; 
  

      for (let i = 0; i < str.length; i++) {
            if (str[i] === "a" || str[i] === "e" || str
              [i] === "i" || str[i] === "o" || str[i]
              === "u") {
                result += str[i].toUpperCase();
                } else {
                  result += str[i];
                  }
                  }
                  return result;
                  
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
