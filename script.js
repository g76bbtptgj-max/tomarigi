alert("JS読めてる");

//constゾーン
const aboutSection =
    document.querySelector(".about-section");

const recommenddrinks = [
  {
  name: "いつものブレンド",
  image: "images/brend-coffee.png",

  type: "coffee",
  temp: "hot",
  sweetness: 1,
  caffeine: true,

  mood: ["relax","work"],
  weather: ["all"],
  seat: ["hitoyasumi"],
  season: ["all"]
},
  {
  name: "ふわっとカモミール",
  image: "images/chamomile.png",

  type: "tea",
  temp: "hot",
  sweetness: 2,
  caffeine: false,

  mood: ["relax", "sleep"],
  weather: ["rain", "cloud"],
  seat: ["okomori"],
  season: ["spring", "winter","autumn"]
},
  {
  name: "きりっとレモネード",
  image: "images/lemonade.png",

  type: "juice",
  temp: "ice",
  sweetness: 4,
  caffeine: false,

  mood: ["fresh", "joy"],
  weather: ["sunny"],
  seat: ["yakusoku"],
  season: ["spring", "summer"]
},
  {
  name: "ほっこりキャラメルラテ",
  image: "images/caramel.png",

  type: "coffee",
  temp: "hot",
  sweetness: 5,
  caffeine: true,

  mood: ["relax"],
  weather: ["rain", "cloud"],
  seat: ["okomori"],
  season: ["autumn", "winter"]
},

{
  name: "じわっとりんご",
  image: "images/apple-cinnamon.png",

  type: "juice",
  temp: "hot",
  sweetness: 4,
  caffeine: false,

  mood: ["relax"],
  weather: ["rain", "cloud"],
  seat: ["okomori"],
  season: ["autumn", "winter"]

}


];

setTimeout(() => {
    aboutSection.classList.add("show");
}, 1000);


//ランダムドリンク表示
const randomDrink =
recommenddrinks[Math.floor(Math.random() * recommenddrinks.length)];

document.getElementById("recommend-name").textContent =
randomDrink.name;

document.getElementById("recommend-image").src =
randomDrink.image;

document.getElementById("recommend-image").alt =
randomDrink.name;