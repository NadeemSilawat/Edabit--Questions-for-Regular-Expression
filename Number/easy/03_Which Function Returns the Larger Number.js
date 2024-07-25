// https://edabit.com/challenge/o7TwicAHWuMkjbDqQ
function whichIsLarger(f, g) {
	if(f < g){
        return "f"
    }
    else
    if(f === g){
       return 'neither' 
    }
    else
    if( f > g ){
        return 'g'  
      }
    
}
console.log(whichIsLarger(()=>5, ()=>10)); //'g')
console.log(whichIsLarger(()=>10, ()=>5)); //'f')
console.log(whichIsLarger(()=>25, ()=>25)); //'neither')
console.log(whichIsLarger(()=>-100, ()=>-100)); //'neither')
console.log(whichIsLarger(()=>-100, ()=>0)); //'g')
console.log(whichIsLarger(()=>505050, ()=>5050)); //'f')
console.log(whichIsLarger(()=>100, ()=>1000)); //   'g')