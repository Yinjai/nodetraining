
var pigLatin = function(req, res, next) {

  var allwords = req.params.words.split(' ');
  var vowels = ['a' , 'e' , 'i' , 'o' , 'u' ];
  var final = '';

  console.log(allwords);
  console.log(vowels);

  for(i = 0; i < allwords.length; i++) {
    var word = allwords[i];
    var wordArray = word.split('');
    var firstChar = wordArray[0];


    if (vowels.indexOf(firstChar) != -1) {
        console.log('test there is a vowel start');
        final = final + word + 'way' + ' ';

    } else {
        console.log('no vowel starting');
        wordArray.shift();
        var restOfArray = wordArray.join('');
        final = final + restOfArray + firstChar + 'ay' + ' ';

    }
    req.word = final;

  }

  return next();
}

module.exports = pigLatin;
