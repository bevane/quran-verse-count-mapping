# Qur'an verse count mapping

Each Surah (chapter) in the Qur'an has different number of Ayat (verses)
which can make input validation for chapter number and verse number a bit
complicated.

This repo provides a json object with chapter number to verse count key-value
pairs that you can copy into your programs to make it easier to validate
without having to hit the quran api.

# Map generation

`map.json` was generated with `script/generateMap` by fetching
chapters information from the quran api.

# Examples

Below are snippets of code in different languages using this map to do some
validation. Functioning code examples can be found in the `examples/`

## JavaScript

<details>
<summary>Map in JS | Click to Expand</summary>

```js
// data.js
export const chapterToVerseCount = {
  1: 7,
  2: 286,
  3: 200,
  4: 176,
  5: 120,
  6: 165,
  7: 206,
  8: 75,
  9: 129,
  10: 109,
  11: 123,
  12: 111,
  13: 43,
  14: 52,
  15: 99,
  16: 128,
  17: 111,
  18: 110,
  19: 98,
  20: 135,
  21: 112,
  22: 78,
  23: 118,
  24: 64,
  25: 77,
  26: 227,
  27: 93,
  28: 88,
  29: 69,
  30: 60,
  31: 34,
  32: 30,
  33: 73,
  34: 54,
  35: 45,
  36: 83,
  37: 182,
  38: 88,
  39: 75,
  40: 85,
  41: 54,
  42: 53,
  43: 89,
  44: 59,
  45: 37,
  46: 35,
  47: 38,
  48: 29,
  49: 18,
  50: 45,
  51: 60,
  52: 49,
  53: 62,
  54: 55,
  55: 78,
  56: 96,
  57: 29,
  58: 22,
  59: 24,
  60: 13,
  61: 14,
  62: 11,
  63: 11,
  64: 18,
  65: 12,
  66: 12,
  67: 30,
  68: 52,
  69: 52,
  70: 44,
  71: 28,
  72: 28,
  73: 20,
  74: 56,
  75: 40,
  76: 31,
  77: 50,
  78: 40,
  79: 46,
  80: 42,
  81: 29,
  82: 19,
  83: 36,
  84: 25,
  85: 22,
  86: 17,
  87: 19,
  88: 26,
  89: 30,
  90: 20,
  91: 15,
  92: 21,
  93: 11,
  94: 8,
  95: 8,
  96: 19,
  97: 5,
  98: 8,
  99: 8,
  100: 11,
  101: 11,
  102: 8,
  103: 3,
  104: 9,
  105: 5,
  106: 4,
  107: 7,
  108: 3,
  109: 6,
  110: 3,
  111: 5,
  112: 4,
  113: 5,
  114: 6,
};
```

</details>

```js
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
```

Results

![](docs/demo.gif)

## Python

<details>
<summary>Map in Python | Click to Expand</summary>

```python
    # get_map() returns the below dict
    map = {
        1: 7,
        2: 286,
        3: 200,
        4: 176,
        5: 120,
        6: 165,
        7: 206,
        8: 75,
        9: 129,
        10: 109,
        11: 123,
        12: 111,
        13: 43,
        14: 52,
        15: 99,
        16: 128,
        17: 111,
        18: 110,
        19: 98,
        20: 135,
        21: 112,
        22: 78,
        23: 118,
        24: 64,
        25: 77,
        26: 227,
        27: 93,
        28: 88,
        29: 69,
        30: 60,
        31: 34,
        32: 30,
        33: 73,
        34: 54,
        35: 45,
        36: 83,
        37: 182,
        38: 88,
        39: 75,
        40: 85,
        41: 54,
        42: 53,
        43: 89,
        44: 59,
        45: 37,
        46: 35,
        47: 38,
        48: 29,
        49: 18,
        50: 45,
        51: 60,
        52: 49,
        53: 62,
        54: 55,
        55: 78,
        56: 96,
        57: 29,
        58: 22,
        59: 24,
        60: 13,
        61: 14,
        62: 11,
        63: 11,
        64: 18,
        65: 12,
        66: 12,
        67: 30,
        68: 52,
        69: 52,
        70: 44,
        71: 28,
        72: 28,
        73: 20,
        74: 56,
        75: 40,
        76: 31,
        77: 50,
        78: 40,
        79: 46,
        80: 42,
        81: 29,
        82: 19,
        83: 36,
        84: 25,
        85: 22,
        86: 17,
        87: 19,
        88: 26,
        89: 30,
        90: 20,
        91: 15,
        92: 21,
        93: 11,
        94: 8,
        95: 8,
        96: 19,
        97: 5,
        98: 8,
        99: 8,
        100: 11,
        101: 11,
        102: 8,
        103: 3,
        104: 9,
        105: 5,
        106: 4,
        107: 7,
        108: 3,
        109: 6,
        110: 3,
        111: 5,
        112: 4,
        113: 5,
        114: 6,
    }
```
</details>

```python
def main():
    chapter_to_verse_dict = get_map()
    validation_results = []
    # list of (chapter_number, verse_number) inputs to validate
    input_list = [
        (1, 1),
        (1, 0),
        (1, 7),
        (1, 8),
        (2, 286),
        (2, 300),
        (3, 386),
    ]
    for input in input_list:
        chapter = input[0]
        verse = input[1]
        result = validate(chapter_to_verse_dict, chapter, verse)
        validation_results.append((input, result))
    print(validation_results)


def validate(map, chapter, verse):
    # return true if the chapter and verse are valid
    # validate chapter
    if not chapter in map:
        return False
    # validate verse
    if verse <= 0 or verse > map[chapter]:
        return False
    return True
```
Results
```python
[
    ((1, 1), True),
    ((1, 0), False),
    ((1, 7), True),
    ((1, 8), False),
    ((2, 286), True),
    ((2, 300), False),
    ((3, 386), False)
]
```

