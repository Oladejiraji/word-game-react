export function ShuffleWord(selectedWord) {
  let wordArray = selectedWord.split("");

  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }

  wordArray = wordArray.join("");
  return wordArray;
}

export function checkWin(selectedWord, answerWord) {
  let status = "";
  if (selectedWord.split("").length === answerWord.length) {
    if (selectedWord === answerWord.join("")) {
      status = "win";
    } else {
      status = "lose";
    }
  }
  return status;
}
