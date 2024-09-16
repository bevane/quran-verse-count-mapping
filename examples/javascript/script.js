import { chapterToVerseCount } from "./data.js";
const chapterInput = document.querySelector("input#chapter");
const verseInput = document.querySelector("input#verse");
const chapterError = document.querySelector("#chapter-error");
const verseError = document.querySelector("#verse-error");

chapterInput.addEventListener("input", validateInputs);
verseInput.addEventListener("input", validateInputs);

function validateInputs() {
  const chapterValue = chapterInput.value;
  const verseValue = verseInput.value;

  if (chapterIsValid(chapterValue)) {
    chapterError.textContent = "";
  } else {
    chapterError.textContent = "Enter a chapter number between 1 and 114";
    verseError.textContent = "";
    return;
  }
  if (verseIsValid(chapterValue, verseValue)) {
    verseError.textContent = "";
  } else {
    const maxVerseNumber = chapterToVerseCount[chapterValue];
    verseError.textContent = `Enter a verse number between 1 and ${maxVerseNumber}`;
  }
}

function chapterIsValid(chapter) {
  return chapter in chapterToVerseCount;
}

function verseIsValid(chapter, verse) {
  // validate chapter
  if (chapter in chapterToVerseCount == false) {
    return false;
  }
  // validate verse
  if (verse <= 0 || verse > chapterToVerseCount[chapter]) {
    return false;
  }
  return true;
}
