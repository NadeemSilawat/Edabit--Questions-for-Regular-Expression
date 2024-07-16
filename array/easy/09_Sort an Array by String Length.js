function sortByLength(arr) {
    function compareNumbers(a, b) {
        return a.length - b.length;
      }   
	return arr.sort(compareNumbers)
}
console.log(sortByLength(["Google", "Apple", "Microsoft"])); //["Apple", "Google", "Microsoft"])
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])); //["Raphael", "Leonardo", "Donatello", "Michelangelo"])
console.log(sortByLength(["Turing", "Einstein", "Jung"])); //["Jung", "Turing", "Einstein"])
console.log(sortByLength(["Tatooine", "Hoth", "Yavin", "Dantooine"])); //["Hoth", "Yavin", "Tatooine", "Dantooine"])
console.log(sortByLength(["Mario", "Bowser", "Link"])); //["Link", "Mario", "Bowser"])