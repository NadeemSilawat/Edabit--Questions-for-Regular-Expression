// https://edabit.com/challenge/AS2NGeGLnwWbMr5SP

const REGEXP = /* Write you expression here */g
const str = "**^&$Regular#$%Expressions$%$$%^**"
​
const validate = (REGEXP) => {
   if(!/\\w/.test(String(REGEXP))) return () => "required"
   return function testReg(str) {
     return str.match(REGEXP).join("")
   }
}
​                   
const testExp = validate(REGEXP)
console.log(testExp(str))
​
Test.assertNotEquals(testExp(str), "required", "You are required to use a \w character class in your expression.")
Test.assertSimilar(testExp(str), "RegularExpressions")
