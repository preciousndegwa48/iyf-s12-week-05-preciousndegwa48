const header = document.getElementById("main-header");
console.log("getElementById:", header);

const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

const h1 = document.querySelector("h1");
console.log("1. h1:", h1);

const allContents = document.querySelectorAll(".content");
console.log("2. All .content:", allContents);

const form = document.getElementById("contact-form");
console.log("3. Form:", form);

const emailInput = document.getElementById("email");
console.log("4. Email input:", emailInput);

const navListItems = document.querySelectorAll("nav li");
console.log("5. Nav li:", navListItems);

const firstNavLink = document.querySelector(".nav-link");
console.log("6. First nav-link:", firstNavLink);

const allParagraphs = document.querySelectorAll("p");
const lastParagraph = allParagraphs[allParagraphs.length - 1];
console.log("7. Last paragraph:", lastParagraph);

const nav = document.querySelector("nav");
console.log("nav parent:", nav.parentElement);
console.log("nav children:", nav.children);
console.log("nav first child:", nav.firstElementChild);
console.log("nav last child:", nav.lastElementChild);

const article = document.querySelector("article");
console.log("article next sibling:", article.nextElementSibling);
console.log("article previous sibling:", article.previousElementSibling);

const navLinks = nav.querySelectorAll("a");
console.log("navLinks inside nav:", navLinks);

const headerEl = document.getElementById("main-header");
const navInsideHeader = headerEl.querySelector("nav");
console.log("Practice 1 - nav inside header:", navInsideHeader);

const firstLink2 = document.querySelector(".nav-link");
const parentLi = firstLink2.parentElement;
console.log("Practice 2 - parent li:", parentLi);

const articleEl = document.querySelector("article");
const nextSibling = articleEl.nextElementSibling;
console.log("Practice 3 - article next sibling:", nextSibling);

const ul = document.querySelector("ul");
const allLi = ul.children;
console.log("Practice 4 - all li in ul:", allLi);

const footer = document.querySelector("footer");
const bodyFromFooter = footer.parentElement;
console.log("Practice 5 - body from footer:", bodyFromFooter);
