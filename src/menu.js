import "./style.css"
import eggImage from "./img/eggnog.jpg";

export default function loadMenu() {
  const content = document.getElementById("content");
  const header = document.createElement("h1");
  header.textContent = `Azeroth's Finest Dining!`;

  content.appendChild(header);
  const title1 = document.createElement('h2');
  title1.textContent = 'Beverages';

  content.appendChild(title1);

  const drink1 = document.createElement('div');
  drink1.classList.add('cont');
  content.appendChild(drink1);

  const drinkTitle1 = document.createElement('h3');
  drinkTitle1.textContent = 'Winter Veil Egg Nog';
  drink1.appendChild(drinkTitle1);

  const drinkDescription1 = document.createElement('p');
  drinkDescription1.textContent = 'Winter Veil Egg Nog is a festive, seasonal drink available during the Feast of Winter Veil that restores health and adds holiday cheer with its unique flavor.';
  drink1.appendChild(drinkDescription1);

  const image = document.createElement("img");
  image.classList.add('img')
  image.src = eggImage;

  drink1.appendChild(image);

}
