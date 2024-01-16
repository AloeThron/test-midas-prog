export function getQuestionPart(phrases: string[]): string[] {
  const result: string[] = [];

  function getChar(): string {
    let key = "";

    const word = phrases[0];

    for (let j = 0; j < phrases[0].length; j++) {
      const secondCharIndex = word.indexOf("") + 1;

      if (secondCharIndex > 0 && secondCharIndex < word.length) {
        const char = word[j] + word[j + 1];

        if (phrases.every((phrase) => phrase.includes(char))) {
          key = char;
          return key;
        }
      }
    }

    return key;
  }

  function getNextChar(char: string): string {
    let key = "";

    for (const phrase of phrases) {
      const index = phrase.indexOf(char);

      if (index !== -1 && index < phrase.length - 2) {
        const nextLetters = phrase.substring(index + 2);

        if (phrases.every((phrase) => phrase.includes(nextLetters))) {
          key = char + nextLetters;
        }
      }
    }

    return key;
  }

  for (const phrase of phrases) {
    const modifiedWord = phrase.replace(getNextChar(getChar()), "");
    result.push(modifiedWord.trim());
  }

  return result;
}

// console.log(getQuestionPart(["BATHROOM", "SALTS BATH", "BLOODBATH"]));
// console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]));
// console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]));
// console.log(getQuestionPart(["BOOKSHELF", "NOTEBOOK", "SCRAPBOOK"]));
// console.log(getQuestionPart(["WHATSHELF", "NOTEWHAT", "SCRAPWHAT"]));
// console.log(getQuestionPart(["CANDLELIGHT", "STARLIGHT", "MOONLIGHT"]));
