import { faker } from "@faker-js/faker";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirPath = path.join(__dirname, "../assets/images/");

const files = fs.readdirSync("../assets/images/");

const postNb = 25;
const mediaNb = 25;
const authorNb = 5;
const categoryNb = 10;

let medias = [];
let authors = [];
let categories = [];

const createMedias = () => {
  for (let i = 0; i < mediaNb; i++) {
    const media = {
      id: i + 1,
      label: `${files[i]}`,
      // media: `${dirPath}${files[i]}`,
      media: `../../assets/images/${files[i]}`,
    };

    medias.push(media);
  }

  return medias;
};

const createAuthors = () => {
  for (let i = 0; i < authorNb; i++) {
    const author = {
      id: i + 1,
      name: faker.name.fullName(),
    };

    authors.push(author);
  }

  return authors;
};

const createCategories = () => {
  const tempCategories = [];

  for (let i = 0; i < categoryNb; i++) {
    let category = {
      id: i + 1,
      label: faker.commerce.department(),
    };

    if (tempCategories.includes(category.label)) {
      i--;
    } else {
      categories.push(category);
      tempCategories.push(category.label);
    }
  }

  return categories;
};

const createPosts = () => {
  const posts = [];

  for (let i = 0; i < postNb; i++) {
    const authorRand = authors[Math.floor(Math.random() * authors.length)];
    const categoryRand =
      categories[Math.floor(Math.random() * categories.length)];
    const mediaRand = medias[Math.floor(Math.random() * medias.length)];

    const post = {
      id: i + 1,
      title: faker.lorem.sentence(),
      author: authorRand,
      description: faker.lorem.sentence(25),
      text: faker.lorem.paragraphs(15),
      category: categoryRand,
      image: mediaRand,
      date: faker.date.recent(25),
    };

    posts.push(post);
  }

  return posts;
};

(async () => {
  const generatedMedias = createMedias(mediaNb);
  const generatedAuthors = createAuthors(authorNb);
  const generatedCategories = createCategories(categoryNb);
  const generatedPosts = createPosts(postNb);

  let mediasJson = JSON.stringify(generatedMedias);
  let authorsJson = JSON.stringify(generatedAuthors);
  let categoriesJson = JSON.stringify(generatedCategories);
  let postsJson = JSON.stringify(generatedPosts);

  fs.writeFile("medias.json", mediasJson, "utf8", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });

  fs.writeFile("authors.json", authorsJson, "utf8", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });

  fs.writeFile("categories.json", categoriesJson, "utf8", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });

  fs.writeFile("blogPosts.json", postsJson, "utf8", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
})();
