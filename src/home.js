export default function loadHome() {
  const content = document.getElementById("content");
  const header = document.createElement("h1");
  header.textContent = `Welcome to Azeroth's Finest Dining!`;

  const cont1 = document.createElement('div');

  const description = document.createElement("p");
  description.textContent = `Step into a realm where flavors are as legendary as the battles of old. At World of Warcraft Restaurants, we bring the taste of Azeroth to your table. Savor hearty Stormwind stews, fiery Orgrimmar roasts, and exotic Pandaren delicacies, all prepared by culinary artisans from every corner of the realm. Whether you're a brave adventurer or a humble trader, our doors are open to all who seek an unforgettable feast.`;
  content.appendChild(header);

  cont1.appendChild(description);

  content.appendChild(cont1);
  
  const cont2 = document.createElement('div');
  const scheduleTitle = document.createElement('h3');
  scheduleTitle.textContent = 'Work schedule:';
  cont2.appendChild(scheduleTitle);
  for (let i = 0; i < 7; i++) {
    const day = document.createElement('p');
    day.textContent = 'Placeholder time (Will be added later or never :P)';
    cont2.appendChild(day);
  }
  content.appendChild(cont2);
}
