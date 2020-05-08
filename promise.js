const str = {
  "name": "Ancient One",
  "species": "human",
  "gender": "Female",
  "birthDay": "1316",
  "deathDay": "2017",
  "status": "deceased",
  "actors": "Tilda Swinton",
  "photo": "dbimage/DS_Ancient_One_Poster_cropped.png",
  "movies": [
    "Doctor Strange",
    "Avengers: Endgame"
  ]
};
let оb = JSON.stringify(str);
console.log(ob);
const jsonFile = JSON.parse("./dbHeroes/dbHeroes.json");
const arrCards = (jsonFile);
// arrCards.
