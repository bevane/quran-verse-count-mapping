function main() {
  const fs = require("fs");
  const url = "https://api.quran.com/api/v4/chapters";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const map = {};
      for (const chapter of data.chapters) {
        map[chapter.id] = chapter.verses_count;
      }
      fs.writeFile("map.json", JSON.stringify(map, null, 2), (error) => {
        if (error) console.log("Error:", error);
        else console.log("map.json created");
      });
    })
    .catch((error) => console.log(error));
}

main();
