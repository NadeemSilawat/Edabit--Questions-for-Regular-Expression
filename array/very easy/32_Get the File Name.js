function getFilename(path) {
    //Answer 1
    // return path.split('/').pop();

    //Answer 2
    var b = path.split('/');
    return b.pop()
}
console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt")); //"edabit.txt")
console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3")); //"Beethoven_5.mp3")
console.log(getFilename("ffprobe.exe")); //"ffprobe.exe")
console.log(getFilename("Music/Drafts/unfinished2.midi")); //"unfinished2.midi")
console.log(getFilename("C:/Users/chad/OneDrive/Desktop/Atom.lnk")); //"Atom.lnk")
console.log(getFilename("senoron/OneDrive/Desktop/DDLC-1.1.1-pc/lib/windows-i686/DDLC.exe")); //"DDLC.exe")