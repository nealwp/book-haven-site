import cart from "./cart.js";

const galleryItems = [
  {
    src: "/public/Client3_Book1.png",
    title: "Brie Mine 4Ever",
    description:
      "<i>Brie Mine 4Ever</i> is a lighthearted romantic comedy that follows two cheese shop owners whose rivalry turns into romance during their town's annual food festival. Packed with puns, heart, and plenty of brie, it's a charming story about love, second chances, and following your heart (and your stomach).",
    cost: 0,
    alt: "a picture of a yellow book cover with the title 'Brie Mine 4Ever'",
  },
  {
    src: "/public/Client3_Book2.png",
    title: "Glory Riders",
    description:
      "<i>Glory Riders</i> is a gripping Western adventure that follows a band of rugged outlaws turned reluctant heroes as they ride across dangerous territory to protect a frontier town from a ruthless land baron. Filled with action, loyalty, and redemption, it's a tale of honor forged in the dust and fire of the Old West.",
    cost: 0,
    alt: "a picture of a blue book cover with the title 'Glory Riders'",
  },
  {
    src: "/public/Client3_Book3.png",
    title: "Sorcerer's Shadowed Chronicles",
    description:
      "<i>Sorcerer's Shadowed Chronicles</i> is an epic fantasy saga that follows a young mage uncovering dark secrets about his lineage while battling a rising evil threatening the realm. Blending magic, mystery, and betrayal, it’s a journey through shadowed lands where power comes at a steep price.",
    cost: 0,
    alt: "a picture of a gray book cover with the title 'Sorcerer's Shadowed Chronicles'",
  },
  {
    src: "/public/Client3_Magazine1.png",
    title: "Ball Magazine",
    description:
      "<i>Ball</i> is a vibrant publication dedicated to the fast-growing world of pickleball, featuring player spotlights, gear reviews, tournament coverage, and tips for all skill levels. Blending sport and community, it celebrates the energy, inclusivity, and passion driving the pickleball movement.",
    cost: 0,
    alt: "a picture of a magazine with a hand balancing a pickleball on a pickleball paddle over a net on the cover",
  },
  {
    src: "/public/Client3_Magazine2.png",
    title: "Travel Magazine",
    description:
      "<i>Travel</i> is your guide to exploring the world, featuring breathtaking destinations, insider tips, cultural highlights, and travel gear recommendations. Whether you're planning a weekend getaway or a global adventure, it inspires every journey with expert advice and stunning photography.",
    cost: 0,
    alt: "a picture of a magazine with a waterfall on the cover",
  },
  {
    src: "/public/Client3_Magazine3.png",
    title: "Eat. Magazine",
    description:
      "<i>Eat.</i> is a modern food and lifestyle publication that celebrates cooking, culture, and community through mouthwatering recipes, chef interviews, and food trend insights. From street eats to fine dining, each issue invites readers to savor the stories behind what we eat and why it matters.",
    cost: 0,
    alt: "a picture of a magazine with a large stack of pancakes on the cover",
  },
  {
    src: "/public/Client3_ToteBag.png",
    title: "Tote Bag",
    description:
      "A stylish and durable carryall featuring reinforced handles and a spacious interior, perfect for books, groceries, or everyday essentials. Made from eco-friendly materials, it's a practical accessory for life on the go.",
    cost: 0,
    alt: "a picture of a tan tote bag with 'all I do is read read read' printed on it",
  },
  {
    src: "/public/Client3_Notebook.png",
    title: "Notebook",
    description:
      "A sleek, lined journal designed for capturing thoughts, sketches, and to-do lists, whether you're in class or on the move. With a sturdy cover and smooth pages, it's the perfect companion for everyday creativity and organization.",
    cost: 0,
    alt: "a picture of a brown notebook with a Book Haven logo on the cover",
  },
  {
    src: "/public/Client3_Stickers.png",
    title: "Stickers",
    description:
      "A fun and vibrant set of high-quality vinyl stickers featuring playful designs, perfect for decorating laptops, notebooks, water bottles, and more. Durable and waterproof, they let you add a personal touch anywhere you like.",
    cost: 0,
    alt: "a picture of a collection of black and white stickers",
  },
];

const galleryGrid = document.getElementById("gallery-grid");

function createGridItem(item) {
  const div = document.createElement("div");
  div.classList.add("gallery-item");

  div.innerHTML = `
      <img src="${item.src}" alt="${item.alt}" />
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <span>$${item.cost}</span>`;

  const addButton = document.createElement("button");
  addButton.onclick = () => cart.addItem(item);
  addButton.innerText = "Add to Cart";
  addButton.classList.add("add-to-cart-button");

  div.append(addButton);
  return div;
}

for (const item of galleryItems) {
  const gridItem = createGridItem(item);
  galleryGrid.append(gridItem);
}

const viewCartButton = document.getElementById("view-cart-button");

viewCartButton.onclick = () => {
  cart.show();
};
