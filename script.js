/* Select the main container */
const app = document.getElementById("app");

/* Create the main card */
const card = document.createElement("article");
card.classList.add("blog-card");

/* Create the top image */
const coverImage = document.createElement("img");
coverImage.classList.add("cover-image");
coverImage.setAttribute("src", "Images/cover.jpeg");
coverImage.setAttribute("alt", "Abstract yellow, black, and white blog cover");

/* Create the category badge */
const category = document.createElement("p");
category.classList.add("category-badge");
category.textContent = "Learning";

/* Create the publication date */
const date = document.createElement("p");
date.classList.add("publish-date");
date.textContent = "Published 21 Dec 2023";

/* Create the title */
const title = document.createElement("h1");
title.classList.add("blog-title");
title.textContent = "HTML & CSS foundations";

/* Create the description */
const description = document.createElement("p");
description.classList.add("blog-description");
description.textContent =
  "These languages are the backbone of every website, defining structure, content, and presentation.";

/* Create the author section */
const author = document.createElement("div");
author.classList.add("author");

/* Create the author's image */
const authorImage = document.createElement("img");
authorImage.classList.add("author-image");
authorImage.setAttribute("src", "Images/person.jpeg");
authorImage.setAttribute("alt", "Author Greg Hooper");

/* Create the author's name */
const authorName = document.createElement("p");
authorName.classList.add("author-name");
authorName.textContent = "Greg Hooper";

/* Add the image and name to the author section */
author.appendChild(authorImage);
author.appendChild(authorName);

/* Add all elements to the card */
card.appendChild(coverImage);
card.appendChild(category);
card.appendChild(date);
card.appendChild(title);
card.appendChild(description);
card.appendChild(author);

/* Add the completed card to the page */
app.appendChild(card);
