// https://edabit.com/challenge/WT5MGmgaP3jvx8qpt

function subReddit(link) {
  let regex = /https?:\/\/(www\.)?reddit\.com\/r\/([a-zA-Z0-9_]+)/;
  let match = link.match(regex);
  if (match) {
    return match[2];
  } else {
    return null;
  }
}

console.log(subReddit('https://www.reddit.com/r/relationships/')); //, "relationships")
console.log(subReddit('https://www.reddit.com/r/mildlyinteresting/')); //, "mildlyinteresting")
console.log(subReddit('https://www.reddit.com/r/funny/')); //, "funny")
console.log(subReddit('https://www.reddit.com/r/CrappyDesign/')); //, "CrappyDesign")
console.log(subReddit('https://www.reddit.com/r/confession/')); //, "confession")
console.log(subReddit('https://www.reddit.com/r/AskMen/')); //, "AskMen")
console.log(subReddit('https://www.reddit.com/r/comics/')); //, "comics")
console.log(subReddit('https://www.reddit.com/r/lifehacks/')); //, "lifehacks")
console.log(subReddit('https://www.reddit.com/r/wholesomememes/')); //, "wholesomememes")
console.log(subReddit('https://www.reddit.com/r/iamverysmart/')); //, "iamverysmart")
console.log(subReddit('https://www.reddit.com/r/starterpacks/')); //, "starterpacks")
console.log(subReddit('https://www.reddit.com/r/awww/')); //, "awww")
