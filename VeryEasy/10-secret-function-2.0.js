// https://edabit.com/challenge/eKNJGfjAAYgEsCerC

function secret(text) {
  const r = /(\w+)\*(\d+)/g;
  // text.replace(r,ms(()=>{
  //     console.log($1)
  //     console.log(div)
  //     console.log(div)

  // }));

   text.replace(r, ms);
  function ms(match, p1, p2, offset, string) {
    // console.log('match', match);
    // console.log('p1', p1);
    // console.log('p2', p2);

    const reuse = `<${p1}></${p1}>`;
    return reuse.repeat(p2);
  }

  return text.replace(r, (match, p1, p2) =>`<${p1}></${p1}>`.repeat(p2));
  
}

console.log(secret('div*2')); //,`<div></div><div></div>`)
console.log(secret('p*1')); //,`<p></p>`)
console.log(secret('li*3')); //,`<li></li><li></li><li></li>`)
console.log(secret('h1*4')); //,`<h1></h1><h1></h1><h1></h1><h1></h1>`)
console.log(secret('ul*2')); //,`<ul></ul><ul></ul>`)
