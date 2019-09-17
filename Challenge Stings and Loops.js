function countVowels(phrase){
    var vowels = phrase.match(/[aeiou]/gi);
    var newstrg = " ";
    for (i=0; i< phrase.length; i++) {
        if (vowels.indexOf(phrase[i]) >=0) newstrg += phrase[i];
    }
    var count = phrase.match(/[aeiou]/gi).length;
    return [newstrg,count]
}
console.log (countVowels("This is Andela"));