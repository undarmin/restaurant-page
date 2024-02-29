import Image from './assets/about-image.jpg';

function createAbout(parent) {
  const aboutHeading = document.createElement("h1");
  aboutHeading.textContent = "About Us: Thistle & Heather Tavern";

  const img = document.createElement('img');
  img.src = Image;

  // Our Founding Inspiration
  const inspirationSectionHeading = document.createElement("h2");
  inspirationSectionHeading.textContent = "Our Founding Inspiration";
  const inspirationSectionParagraph = document.createElement("p");
  inspirationSectionParagraph.textContent =
    "Nestled in the heart of Edinburgh's historic Old Town, Thistle & Heather Tavern is more than just a restaurant; it's a celebration of Scotland's rich cultural heritage and culinary traditions.";

  // A Journey Through Scotland's Heart
  const journeySectionHeading = document.createElement("h2");
  journeySectionHeading.textContent = "A Journey Through Scotland's Heart";
  const journeySectionParagraph = document.createElement("p");
  journeySectionParagraph.textContent =
    "Founded by a group of friends with a passion for Scottish cuisine and a deep appreciation for the country's natural beauty, Thistle & Heather Tavern was born out of a desire to create a welcoming space where locals and visitors alike could come together to savor the flavors of Scotland.";

  // Crafting Culinary Classics with a Modern Twist
  const craftingSectionHeading = document.createElement("h2");
  craftingSectionHeading.textContent =
    "Crafting Culinary Classics with a Modern Twist";
  const craftingSectionParagraph = document.createElement("p");
  craftingSectionParagraph.textContent =
    "Drawing on their own Scottish roots and a commitment to sourcing the finest local ingredients, the founders worked tirelessly to craft a menu that pays homage to Scotland's culinary classics while also incorporating modern twists and flavors.";

  // A Hub of Creativity and Community
  const hubSectionHeading = document.createElement("h2");
  hubSectionHeading.textContent = "A Hub of Creativity and Community";
  const hubSectionParagraph = document.createElement("p");
  hubSectionParagraph.textContent =
    "But Thistle & Heather Tavern is more than just a place to enjoy delicious food; it's a gathering place for the community, a hub of creativity and conversation, and a home away from home for all who walk through its doors.";

  // Join Us on a Culinary Adventure
  const joinSectionHeading = document.createElement("h2");
  joinSectionHeading.textContent = "Join Us on a Culinary Adventure";
  const joinSectionParagraph = document.createElement("p");
  joinSectionParagraph.textContent =
    "With its cozy interior and warm hospitality, Thistle & Heather Tavern invites you to embark on a culinary adventure through Scotland's heart, one delicious dish at a time.";

  parent.append(
    aboutHeading,
    img,
    inspirationSectionHeading,
    inspirationSectionParagraph,
    journeySectionHeading,
    journeySectionParagraph,
    craftingSectionHeading,
    craftingSectionParagraph,
    hubSectionHeading,
    hubSectionParagraph,
    joinSectionHeading,
    joinSectionParagraph
  );
}

export { createAbout };
