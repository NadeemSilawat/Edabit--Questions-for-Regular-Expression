function fixImport(s) {
	
	let match = s.match(/^import (.+) from (.+)$/);
    if (match) {
        return `from ${match[2]} import ${match[1]}`;
    } else {
        return s;
    }

}
console.log(fixImport("import object from module_name")) //, "from module_name import object")
console.log(fixImport("import randint from random")) //, "from random import randint")
console.log(fixImport("import pi from math")) //, "from math import pi")

