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

const h1 = document.querySelector("h1");
console.log("textContent:", h1.textContent);
console.log("innerText:", h1.innerText);
h1.textContent = "New Title";
h1.textContent = "DOM Practice";
const article = document.querySelector("article");
console.log("innerHTML:", article.innerHTML);
const userInput = `<img src="x" onerror="alert('hacked!')">`;
article.textContent = userInput;
article.innerHTML = `
    <h2 class="title">Article Title</h2>
    <p class="content">This is the first paragraph.</p>
    <p class="content">This is the second paragraph.</p>
`;
const link = document.querySelector(".nav-link");
console.log("getAttribute href:", link.getAttribute("href"));
console.log("href property:", link.href);
link.setAttribute("href", "https://developer.mozilla.org");
console.log("has target?", link.hasAttribute("target"));
link.removeAttribute("target");
link.dataset.id = "123";
link.dataset.category = "tech";
console.log(link.dataset.id);
console.log(link.dataset.category);
const container = document.querySelector(".container");
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";
Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});


